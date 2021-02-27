import React from 'react';
import { useLocation } from 'react-router-dom';

import chevronRightIcon from '../../../assets/chevron_right_icon.svg';
import listDotIcon from '../../../assets/list_dot_icon.svg';
import { Container } from './styles';

interface SideBarSubItemProps {
  title: string;
  path: string;
}

export const SideBarSubItem: React.FC<SideBarSubItemProps> = ({
  title,
  path
}) => {
  const location = useLocation();

  return (
    // TODO fix console warn
    <Container active={location.pathname === path} to={path}>
      <div>
        <img src={listDotIcon} alt="list dot icon" width={6} height={6} />
        <h1>{title}</h1>
      </div>

      <img src={chevronRightIcon} alt="chevron icon" width={9} height={9} />
    </Container>
  );
};
