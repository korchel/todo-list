import React from "react";
import styled, { css } from "styled-components";
import { ITask } from "../types";
import { useRemoveTaskMutation, useUpdateTaskMutation } from "../store/todosApi";

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
  &:hover {
    border-color: var(--green);
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CloseButton = styled.button`
    border: none;
  background: none;
  cursor: pointer;
  color: var(--attention-color);
  font-size: inherit;
  font-weight: 700;
  &:hover {
    color: var(--attention-color-hover);
  }
`;

const TodoItem: React.FC<ITask> = ({ task, id, done }) => {
  const [removeTask] = useRemoveTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  
  const handleChange = () => {
    updateTask({id, update: {done: !done}});
  };
  
  const handleClick = () => {
    removeTask(id);
  };

  return (
    <TodoItemContainer>
      <div>
        <CheckBox id={`${id}`} type="checkbox" checked={done} onChange={handleChange}/>
        <CheckBoxMask onClick={handleChange}></CheckBoxMask>
        <TodoName htmlFor={`${id}`} $completed={done}>{task}</TodoName>
      </div>
      <CloseButton onClick={handleClick}>&#x2715;</CloseButton>
    </TodoItemContainer>
  )
}

export default TodoItem;