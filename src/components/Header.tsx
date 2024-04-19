import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, {css} from 'styled-components';

import { getFilter, setFilter } from '../store/filterSlice';

const Filter = styled.div`
  display: flex;
`;

const HeaderContainer = styled.header`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--gray);
`;

const Button = styled.button<{$active?: boolean}>`
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

interface IHeaderProps {
  clearCompleted: () => void;
}

const Header: React.FC<IHeaderProps> = ({ clearCompleted }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <HeaderContainer>
      <p>1 items left</p>
      <Filter>
        <Button type="button" $active={filter === 'all'} onClick={() => dispatch(setFilter('all'))}>All</Button>
        <Button type="button" $active={filter === 'active'} onClick={() => dispatch(setFilter('active'))}>Active</Button>
        <Button type="button" $active={filter === 'completed'} onClick={() => dispatch(setFilter('completed'))}>Completed</Button>
      </Filter>
      <Button onClick={clearCompleted}>Clear completed</Button>
    </HeaderContainer>
  );
};

export default Header;