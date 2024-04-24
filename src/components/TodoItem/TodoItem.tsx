import React, { useEffect } from "react";

import { ITask } from "../../types";
import { useRemoveTaskMutation, useUpdateTaskMutation } from "../../store/todosApi";
import { TodoItemContainer, CheckBox, CheckBoxMask, Label, CloseButton, EditButton, ButtonGroup } from "./styles";
import { openModal } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

const TodoItem: React.FC<ITask> = ({ task, id, done }) => {
  const dispatch = useDispatch();
  const [removeTask, { isError: isRemoveError}] = useRemoveTaskMutation();
  const [updateTask, { isError: isUpdateError }] = useUpdateTaskMutation();
  
  const handleCheck = () => {
    updateTask({id, update: {done: !done}});
  };
  
  const handleDelete = () => {
    removeTask(id);
  };

  const handleEdit = () => {
    dispatch(openModal({text: task, id, type: 'edit'}));
  };

  useEffect(() => {
    if (isRemoveError) {
      dispatch(openModal({text: 'Task was not removed', type: 'error'}));
    }
    if (isUpdateError) {
      dispatch(openModal({text: 'Task was not updated', type: 'error'}));
    }
  }, [isRemoveError, isUpdateError])

  return (
    <TodoItemContainer>
      <div>
        <CheckBox id={`${id}`} type="checkbox" checked={done} onChange={handleCheck}/>
        <CheckBoxMask onClick={handleCheck}></CheckBoxMask>
        <Label htmlFor={`${id}`} $completed={done}>{task}</Label>
      </div>
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