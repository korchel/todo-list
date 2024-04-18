import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { clearCompleted, getActiveTodosNumber } from '../store/todosSlice';

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

const Button = styled.button`
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

const Header = () => {
  const dispath = useDispatch();
  const activeTodosNumber = useSelector(getActiveTodosNumber);

  const handleClear = () => {
    dispath(clearCompleted());
  }

  return (
    <HeaderContainer>
      <p>{activeTodosNumber} items left</p>
      <Filter>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </Filter>
      <Button onClick={handleClear}>Clear completed</Button>
    </HeaderContainer>
  );
};

export default Header;