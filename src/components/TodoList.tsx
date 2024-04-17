import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useGetTodosQuery } from '../store/todosApi';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Container = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 15px var(--gray);
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  border: none;
  border-bottom: 3px solid var(--border);
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px var(--gray);
  }
`;

const TodoList: React.FC = () => {
  const [text, setText] = useState('');

  const { data } = useGetTodosQuery({limit: 10, skip: 0});

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setText('');
  };

  return (
    <Container>
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
      data?.todos.map((item) => {
        return (
          <TodoItem key={item.id} {...item} />
        );
      })
    }
  </div>
  </Container>
  );
}

export default TodoList;