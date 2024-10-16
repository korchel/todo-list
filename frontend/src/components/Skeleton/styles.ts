import styled from 'styled-components';

import { TodoItemContainer } from '../TodoItem/styles';

export const SkeletonContainer = styled.div`
  position: absolute;
  width: 500px;
  top: 0;
  left: 0;

`;

export const BlankLine = styled(TodoItemContainer)`
  height: 56px;
`;
