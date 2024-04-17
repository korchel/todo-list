import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useGetTodosQuery } from '../store/todosApi';
import styled from 'styled-components';
import TodoItem from './TodoItem';

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

const Header = styled.header`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--gray);
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

const Filter = styled.div`
  display: flex;
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
      <Header>
        <p>2 items left</p>
        <Filter>
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Completed</Button>
        </Filter>
        <Button>Clear completed</Button>
      </Header>
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
      <Pagination>
        <Button>&laquo;</Button>
        <p>...</p>
        <Button>&raquo;</Button>
      </Pagination>
    </Container>
  );
}

export default TodoList;