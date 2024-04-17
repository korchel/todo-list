import React from "react";
import styled, { css } from "styled-components";
import { ITodo } from "../types";


const TodoItemContainer = styled.div`
  padding: 1em;
  border-bottom: 2px solid var(--border);
  display: flex;
`;

const TodoName = styled.label<{$completed: boolean}>`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${props =>
    props.$completed &&
    css`
      text-decoration: line-through;
    `};
`;

const TodoItem: React.FC<ITodo> = ({ todo, id, completed }) => {
  return (
    <TodoItemContainer>
      <input id={`${id}`} type="checkbox" checked={completed} />
      <TodoName htmlFor={`${id}`} $completed={completed}>{todo}</TodoName>
    </TodoItemContainer>
  )
}

export default TodoItem;