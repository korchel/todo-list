import styled, {css} from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.header`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--gray);
`;

export const Button = styled.button<{$active?: boolean}>`
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  border-radius: 3px;
  &:hover {
    border: 1px solid var(--attention-color);
  }
  ${props =>
    props.$active &&
    css`
      border: 1px solid var(--attention-color);
    `};
`;