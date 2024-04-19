import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import TodoItem from './TodoItem/TodoItem';
import Header from './Header/Header';
import { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation } from '../store/todosApi';
import { useSelector } from 'react-redux';
import { getFilter } from '../store/filterSlice';
import { Container, Input, ButtonGroup, Button} from './styles';


const TodoList: React.FC = () => {
  const [text, setText] = useState('');
  const filter = useSelector(getFilter)

  const { data: tasks } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [removeTask] = useRemoveTaskMutation();
  console.log(tasks)

  const filteredTasks = tasks?.filter((task) => {
    switch(filter) {
      case "active":
        return !task.done;
      case "completed":
        return task.done;
      default:
        return true;
    }
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addTask({task: text});
    setText('');
  };

  const clearCompleted = () => {
    tasks?.forEach((task) => {
      if (task.done) {
        removeTask(task.id);
      }
    });
  };

  return (
    <Container>
      <Header clearCompleted={clearCompleted}/>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="What needs to be done?"
        />
      </form>
      <div>
      {
        filteredTasks?.map((item) => {
          return (
            <TodoItem key={item.id} {...item} />
          );
        })
      }
      </div>
      <ButtonGroup>
        <Button>&laquo;</Button>
        <p>...</p>
        <Button>&raquo;</Button>
      </ButtonGroup>
    </Container>
  );
}

export default TodoList;