import React from 'react';
import { ChildrenMain } from './MainContainer.styles';
import { MainContainerProps } from './MainContainer.types';

const MainContainer = (props: MainContainerProps) => {
  const { children } = props;
  return <ChildrenMain>{children}</ChildrenMain>;
};

export default MainContainer;
