import React, { type ChangeEventHandler, useState } from 'react';

import { closeModal, getId, getText } from '../../../store/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Textarea, ButtonGroup, Button } from './styles';
import { useUpdateTaskMutation } from '../../../store/todosApi';

const EditModal: React.FC = () => {
  const dispatch = useDispatch();
  const text = useSelector(getText);
  const id = useSelector(getId);

  const [newText, setNewText] = useState<string>(text);
  const [updateTask] = useUpdateTaskMutation();

  const handleClose = (): void => {
    dispatch(closeModal());
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setNewText(e.target.value);
  };
  const handleSubmit = (): void => {
    id && updateTask({ id, update: { task: newText } });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Textarea aria-label="Edit task" value={newText} onChange={(e) => { handleChange(e); }} />
        <ButtonGroup>
          <Button $green type="submit">Save</Button>
          <Button $red onClick={handleClose}>Cancel</Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default EditModal;
