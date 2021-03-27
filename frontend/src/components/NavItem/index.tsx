import React from 'react';

import { NavItemInterface } from '../../interfaces/NavItem.interface';

import { Item } from './styles';

const NavItem: React.FC<NavItemInterface> = (props: NavItemInterface) => {
  const { icon, title } = props;

  return (
    <Item icon={icon}>
      <h3>{title}</h3>
    </Item>
  );
};

export default NavItem;
