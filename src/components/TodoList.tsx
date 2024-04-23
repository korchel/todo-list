import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import chunk from 'lodash.chunk';

import TodoItem from './TodoItem/TodoItem';
import Header from './Header/Header';
import { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation } from '../store/todosApi';
import { useSelector } from 'react-redux';
import { getFilter } from '../store/filterSlice';
import { Container, Input, ButtonGroup, Button, ListContainer} from './styles';
import Skeleton from './Skeleton/Skeleton';
import Modal from "./Modal/Modal";
import {getShown, getTask} from '../store/modalSlice';

const TodoList: React.FC = () => {
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const filter = useSelector(getFilter);



  const { data: allTasks } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [removeTask] = useRemoveTaskMutation();

  const showModal = useSelector(getShown);

  const pageSize = 10;

  const filteredTasks = allTasks?.filter((task) => {
    switch(filter) {
      case "active":
        return !task.done;
      case "completed":
        return task.done;
      default:
        return true;
    }
  });

  const activeTasksNumber = allTasks?.filter((task) => !task.done).length ?? 0;

  const chunks = chunk(filteredTasks, pageSize);
  const tasksChunks = chunks.map((items, index) => ({ items, pageNumber: index }));



  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addTask({task: text});
    setText('');
  };

  const clearCompleted = () => {
    allTasks?.forEach((task) => {
      if (task.done) {
        removeTask(task.id);
      }
    });
  };

  return (
    <Container>
      <Header clearCompleted={clearCompleted} activeTasksNumber={activeTasksNumber}/>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="What needs to be done?"
          aria-label="What needs to be done?"
        />
      </form>
        <ListContainer>
        <Skeleton />
        {
          tasksChunks[currentPage]?.items.map((item) => {
            return (
              <TodoItem key={item.id} {...item} />
            );
          })
        }
        </ListContainer>
      <ButtonGroup>
        <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>&laquo;</Button>
        {tasksChunks.map(({pageNumber}) => (
          <Button $active={pageNumber === currentPage} key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>{pageNumber + 1}</Button>
        ))}
        <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === tasksChunks.length - 1}>&raquo;</Button>
      </ButtonGroup>
      {showModal && <Modal />}
    </Container>
  );
}

export default TodoList;