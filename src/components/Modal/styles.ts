import styled, { css } from 'styled-components';

export const ModalContainer = styled.div<{ $shown: boolean }>`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 400px;
  border-radius: 4px;
  box-shadow: 0px 0px 15px var(--gray);

  display: flex;
  flex-direction: column;
  align-items: end;

  background-color: var(--white);
  font-size: 1rem;
  pointer-events: auto;
  transition: opacity 0.25s;

  ${props =>
    props.$shown &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const CloseButton = styled.button`
  border: none;
  background: none;

  color: var(--attention-color);
  font-size: inherit;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: var(--attention-color-hover);
  }
`;
