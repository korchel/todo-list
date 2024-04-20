import React from "react";

import { ITask } from "../../types";
import { useRemoveTaskMutation, useUpdateTaskMutation } from "../../store/todosApi";
import { TodoItemContainer, CheckBox, CheckBoxMask, Label, CloseButton, CheckBoxContainer, EditButton, ButtonGroup } from "./styles";



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
      <CheckBoxContainer>
        <CheckBox id={`${id}`} type="checkbox" checked={done} onChange={handleChange}/>
        <CheckBoxMask onClick={handleChange}></CheckBoxMask>
        <Label htmlFor={`${id}`} $completed={done}>{task}</Label>
      </CheckBoxContainer>
      <ButtonGroup>
        <EditButton >
          <i className="fa fa-edit"></i>
        </EditButton>
        <CloseButton onClick={handleClick}>&#x2715;</CloseButton>
      </ButtonGroup>
    </TodoItemContainer>
  )
}

export default TodoItem;