import React from 'react';

import { BlankLine, SkeletonContainer } from './styles';

const Skeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      {Array.from({ length: 10 }, (_, i) => <BlankLine key={i} />)}
    </SkeletonContainer>
  );
};

export default Skeleton;
