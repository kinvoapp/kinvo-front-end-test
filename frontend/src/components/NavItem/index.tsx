import React from 'react';

import { NavItemInterface } from '../../interfaces/NavItem.interface';

import { Item } from './styles';

const NavItem: React.FC<NavItemInterface> = (props: NavItemInterface) => {
  const { icon, title, subMenu } = props;

  return (
    <Item icon={icon} className={subMenu && 'active'}>
      <h3>{title}</h3>

      {subMenu && (
        <ul className="subMenu">
          {subMenu.map(itemTitle => (
            <li key={itemTitle}>{itemTitle}</li>
          ))}
        </ul>
      )}
    </Item>
  );
};

export default NavItem;
