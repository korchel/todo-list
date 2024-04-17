import React, {useState} from "react";
import styled, { css } from "styled-components";
import { ITodo } from "../types";

const CheckBox = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked + span {
    border-color: var(--green);
  }
  &:checked + span:after {
    border-color: var(--green);
    opacity: 1;
  }
`;

const CheckBoxMask = styled.span`
  position: absolute;
  display: block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid var(--border);
  cursor: pointer;
  &:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 6px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;

const TodoItemContainer = styled.div`
  position: relative;
  padding: 1em 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
`;

const TodoName = styled.label<{ $completed: boolean }>`
  margin-left: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  ${props =>
    props.$completed &&
    css`
      text-decoration: line-through;
    `};
`;

const TodoItem: React.FC<ITodo> = ({ todo, id, completed }) => {
  const [checked, setChecked] = useState(completed);

  const handleChange = () => {
    setChecked(!checked)
  };
  return (
    <TodoItemContainer>
      <CheckBox id={`${id}`} type="checkbox" checked={checked} />
      <CheckBoxMask></CheckBoxMask>
      <TodoName htmlFor={`${id}`} $completed={completed} onChange={handleChange}>{todo}</TodoName>
    </TodoItemContainer>
  )
}

export default TodoItem;