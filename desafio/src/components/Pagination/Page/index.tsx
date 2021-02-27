import React from 'react';

import { Container, PageButton } from './styles';

interface PageProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children, active, onClick }) => {
  return (
    <Container>
      <PageButton active={active} type="button" onClick={onClick}>
        {children}
      </PageButton>
    </Container>
  );
};
