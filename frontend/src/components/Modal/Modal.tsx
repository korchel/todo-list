import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getType, closeModal, getShown } from '../../store/modalSlice';
import { ModalContainer, CloseButton } from './styles';
import EditModal from './EditModal/EditModal';
import ErrorModal from './ErrorModal/ErrorModal';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(getShown);
  const type = useSelector(getType);

  const handleClose = (): void => {
    dispatch(closeModal());
  };

  return (
    <ModalContainer $shown={showModal}>
      <CloseButton onClick={handleClose}>&#x2715;</CloseButton>
      {type === 'edit' && <EditModal />}
      {type === 'error' && <ErrorModal />}
    </ModalContainer>
  );
};

export default Modal;
