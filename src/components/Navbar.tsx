import logo from "../assets/logo_kinvo_premium.svg";
import Image from "next/image";

import styled from "styled-components";

import { getTheme } from "../styles/theme";

import { Icon, IconProps } from './Icon';
import { Text } from "./Text";

import { moneyBagIcon, arrowUpIcon, arrowWaveUpRightIcon, arrowChevronDown, hamburgerMenuIcon } from "../styles/icons";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${props => getTheme(props).background.lightest};
`;

const NavbarButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const NavbarInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

interface NavbarInfoProps {
  icon: React.ReactNode,
  title: string,
  value: string,
}

function NavbarInfo({icon, title, value}: NavbarInfoProps) {
  return (
    <>
      <NavbarInfoWrapper>
        <div>
          { icon }
        </div>
        <div>
          <Text style={{ textTransform: "uppercase", fontSize: "0.5rem", lineHeight: "0.5rem" }}>{title}</Text><br/>
          <Text style={{ fontWeight: "bold", fontSize: "1rem" }}>{value}</Text>
        </div>
      </NavbarInfoWrapper>
    </>
  )
}

const menu: NavbarInfoProps[] = [
  {
    title: "Saldo bruto",
    value: "130.521.230,02",
    icon: <Icon src={moneyBagIcon} color="background" shade="dark" />
  },
  {
    title: "Valor aplicado",
    value: "521.230,02",
    icon: <Icon src={arrowUpIcon} color="background" shade="dark" />
  },
  {
    title: "Rentabilidade",
    value: "2,34%",
    icon: <Icon src={arrowWaveUpRightIcon} color="background" shade="dark" />
  },
  {
    title: "Carteira",
    value: "Minha carteira",
    icon: <Icon src={arrowChevronDown} color="primary" />
  },
];

export function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Image src={logo} alt="Kinvo Premium" />
        <NavbarButtons>
          { menu.map((props, index) => <NavbarInfo {...props} key={index} />)}
          <Icon src={hamburgerMenuIcon} />
        </NavbarButtons>
      </NavbarWrapper>
    </>
  );
}
