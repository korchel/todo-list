import styled, {css} from 'styled-components';

export const ModalContainer = styled.div`
  width: 400px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0px 0px 15px var(--gray);
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 1rem;
`;

export const CloseButton = styled.button`
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