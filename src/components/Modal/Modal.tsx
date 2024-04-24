import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getType, closeModal } from "../../store/modalSlice";
import { ModalContainer, CloseButton } from "./styles";
import EditModal from './EditModal/EditModal';
import ErrorModal from './ErrorModal/ErrorModal';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const type = useSelector(getType);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <CloseButton onClick={handleClose}>&#x2715;</CloseButton>
      {type === 'edit' && <EditModal />}
      {type === 'error' && <ErrorModal />}
    </ModalContainer>
  );
};

export default Modal;