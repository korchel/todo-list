import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './store';
import TodoList from './components/TodoList';

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 0;
`;

const Heading = styled.h1`
  margin: 0;
  color: var(--attention-color);
  font-weight: lighter;
  font-size: 5rem;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Provider store={store}>
        <Heading>todos</Heading>
        <TodoList />
      </Provider>
    </Container>
  );
};

export default App;
