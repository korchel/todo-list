import React from 'react';
import './fonts/Roboto-Medium.ttf';
import './fonts/Roboto-Bold.ttf';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './store';
import TodoList from './components/TodoList';

const Container = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px;
`;

const Heading = styled.h1`
  color: var(--attention-color);
`;

function App() {
  return (
    <Container>
      <Provider store={store}>
        <Heading>todos</Heading>
        <TodoList />
      </Provider>
    </Container>
  );
}

export default App;
