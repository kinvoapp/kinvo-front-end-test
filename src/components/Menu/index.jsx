import React, { useState, useEffect } from 'react';

import PurpleBulletIcon from '../../assets/side-menu/purple-bullet.svg';
import ArrowRightIcon from '../../assets/side-menu/arrow-right.svg';

import OptionsList from '../../utils/data/MenuOptionsList';

import {
  MenuContainer,
  NavBar,
  MenuLink,
  MenuIcon,
  MenuDescription,
  MenuDropdownIcon,
  MenuContent,
  MenuSubContent,
  SubMenuContent,
  SubMenuSubContent,
  SubMenuOption,
  SubMenuOptionDescription,
} from './styles';

function Menu() {
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    setMenuOptions([...OptionsList]);
  }, []);

  return (
    <MenuContainer>
      <NavBar>
        {menuOptions.map(menuOption => (
          <MenuLink key={menuOption.Id}>
            <MenuContent>
              <MenuSubContent>
                <MenuIcon src={menuOption.Icon} alt={menuOption.Description} />
                <MenuDescription>{menuOption.Description}</MenuDescription>
              </MenuSubContent>
              <MenuDropdownIcon src={ArrowRightIcon} alt="Listar Opções" />
            </MenuContent>
            {menuOption.SubMenu && (
              <SubMenuContent>
                {menuOption.SubMenu.map(submenu => (
                  <SubMenuOption key={submenu.Description}>
                    <SubMenuSubContent>
                      <MenuIcon src={PurpleBulletIcon} alt={submenu.Description} />
                      <SubMenuOptionDescription>{submenu.Description}</SubMenuOptionDescription>
                    </SubMenuSubContent>
                    <MenuDropdownIcon src={ArrowRightIcon} alt="Listar Opções" />
                  </SubMenuOption>
                ))}
              </SubMenuContent>
            )}
          </MenuLink>
        ))}
      </NavBar>
    </MenuContainer>
  );
}

export default Menu;
