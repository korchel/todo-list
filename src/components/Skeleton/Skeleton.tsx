import styled from 'styled-components';

import {TodoItemContainer} from '../TodoItem/styles';

const SkeletonContainer = styled.div`
  position: absolute;
  width: 500px;
  top: 0;
  left: 0;

`;

const BlankLine = styled(TodoItemContainer)`
  height: 56px;
`;

const Skeleton = () => {
  return (
    <SkeletonContainer>
      {Array.from({ length: 10 }, (_, i) => <BlankLine />)}
    </SkeletonContainer>
  );
};

export default Skeleton;