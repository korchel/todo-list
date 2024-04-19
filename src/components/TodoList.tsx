import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';

import styled from 'styled-components';

import TodoItem from './TodoItem';
import Header from './Header';
import { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation } from '../store/todosApi';
import { FilterType, ITask } from '../types';
import { useSelector } from 'react-redux';
import { getFilter } from '../store/filterSlice';

const Container = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 15px var(--gray);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-bottom: 2px solid var(--border);
  border-top: 2px solid var(--border);
  font-size: 1rem;
  color: inherit;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px var(--gray);
  }
  &::placeholder {
    font-style: italic;
    color: var(--gray);
  }
`;

const Button = styled.button`
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  border-radius: 3px;
  &:hover {
    border: 1px solid var(--attention-color);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  font-size: 1.5em;
  color: var(--gray);
`;

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
      <Pagination>
        <Button>&laquo;</Button>
        <p>...</p>
        <Button>&raquo;</Button>
      </Pagination>
    </Container>
  );
}

export default TodoList;