import logo from "../assets/logo_kinvo_premium.svg";
import Image from "next/image";

import styled from "styled-components";

import { getTheme } from "../styles/theme";

import { Icon, IconProps } from './Icon';

import { moneyIcon, arrowUpIcon, arrowWaveUpRightIcon, arrowChevronDown, hamburgerMenuIcon } from "../styles/icons";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${props => getTheme(props).background.lighter};
`;

const NavbarButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;



export function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Image src={logo} alt="Kinvo Premium" />
        <NavbarButtons>
          <Icon src={moneyIcon} />
          <Icon src={arrowUpIcon} />
          <Icon src={arrowWaveUpRightIcon} />
          <Icon src={arrowChevronDown} />
          <Icon src={hamburgerMenuIcon} />
        </NavbarButtons>
      </NavbarWrapper>
    </>
  );
}
