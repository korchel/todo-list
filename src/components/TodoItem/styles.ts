import styled, { css } from "styled-components";

export const CheckBox = styled.input`
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

export const CheckBoxMask = styled.span`
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

export const CheckBoxContainer = styled.div`

`;


export const Label = styled.label<{ $completed: boolean }>`
  margin-left: 30px;
  cursor: pointer;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.5s ease-in-out;
  max-height: 25px;
  display: -webkit-box;
  
  ${props =>
    props.$completed &&
    css`
      text-decoration: line-through;
    `};
`;

export const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1em 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;

   &:hover ${Label} {
    -webkit-line-clamp: 40;
    max-height: 1000px;
  }
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



export const EditButton = styled.button`
  padding: 1px 8px;
  border: none;
  font-size: inherit;
  background: none;
  cursor: pointer;
  color: inherit;
  i {
    vertical-align: middle;
  }
  &:hover {
    color: var(--attention-color-hover);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
`;