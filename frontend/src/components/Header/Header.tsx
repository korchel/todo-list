import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter, setFilter } from '../../store/filterSlice';
import { HeaderContainer, ButtonGroup, Button } from './styles';

interface IHeaderProps {
  clearCompleted: () => void;
  activeTasksNumber: number;
}

const Header: React.FC<IHeaderProps> = ({ clearCompleted, activeTasksNumber }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <HeaderContainer>
      <p>{activeTasksNumber} items left</p>
      <ButtonGroup>
        <Button type="button" $active={filter === 'all'} onClick={() => dispatch(setFilter('all'))}>All</Button>
        <Button type="button" $active={filter === 'active'} onClick={() => dispatch(setFilter('active'))}>Active</Button>
        <Button type="button" $active={filter === 'completed'} onClick={() => dispatch(setFilter('completed'))}>Completed</Button>
      </ButtonGroup>
      <Button onClick={clearCompleted}>Clear completed</Button>
    </HeaderContainer>
  );
};

export default Header;
