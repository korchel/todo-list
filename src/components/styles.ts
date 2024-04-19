import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 15px var(--gray);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-bottom: 2px solid var(--border);
  border-top: 2px solid var(--border);
  font-size: 1rem;
  color: inherit;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px var(--gray);
  }
  &::placeholder {
    font-style: italic;
    color: var(--gray);
  }
`;

export const Button = styled.button`
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  border-radius: 3px;
  &:hover {
    border: 1px solid var(--attention-color);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  font-size: 1.5em;
  color: var(--gray);
`;