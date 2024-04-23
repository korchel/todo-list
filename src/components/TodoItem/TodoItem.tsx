import React from "react";

import { ITask } from "../../types";
import { useRemoveTaskMutation, useUpdateTaskMutation } from "../../store/todosApi";
import { TodoItemContainer, CheckBox, CheckBoxMask, Label, CloseButton, CheckBoxContainer, EditButton, ButtonGroup } from "./styles";
import { openModal } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

const TodoItem: React.FC<ITask> = ({ task, id, done }) => {
  const dispatch = useDispatch();
  const [removeTask] = useRemoveTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  
  const handleCheck = () => {
    updateTask({id, update: {done: !done}});
  };
  
  const handleDelete = () => {
    removeTask(id);
  };

  const handleEdit = () => {
    dispatch(openModal({task, id}));
  }

  return (
    <TodoItemContainer>
      <CheckBoxContainer>
        <CheckBox id={`${id}`} type="checkbox" checked={done} onChange={handleCheck}/>
        <CheckBoxMask onClick={handleCheck}></CheckBoxMask>
        <Label htmlFor={`${id}`} $completed={done}>{task}</Label>
      </CheckBoxContainer>
      <ButtonGroup>
        <EditButton onClick={handleEdit}>
          <i className="fa fa-edit"></i>
        </EditButton>
        <CloseButton onClick={handleDelete} data-testid={`btn${id}`}>&#x2715;</CloseButton>
      </ButtonGroup>
    </TodoItemContainer>
  );
};

export default TodoItem;