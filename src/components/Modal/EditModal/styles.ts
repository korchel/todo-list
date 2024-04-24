import styled, {css} from 'styled-components';



export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid var(--border);
  border-top: 2px solid var(--border);
  font-size: 1rem;
  font-family: inherit;
  color: inherit;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px var(--gray);
  }
  resize: vertical;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Button = styled.button<{$green?: boolean, $red?: boolean}>`
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  color: var(--gray);
  font-size: inherit;
  border-radius: 3px;

  ${props =>
    props.$green &&
    css`
      border: 1px solid var(--green);
      &:hover {
        border: 1px solid var(--green-hover);
      }
    `};
  ${props =>
    props.$red &&
    css`
      border: 1px solid var(--attention-color);
      &:hover {
        border: 1px solid var(--attention-color-hover);
      }
    `};
`;

export const ButtonGroup = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
`;