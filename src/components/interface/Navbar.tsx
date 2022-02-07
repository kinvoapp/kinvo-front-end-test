import Image from "next/image";
import styled from "styled-components";

import logo from "../../assets/logo_kinvo_premium.svg";

import { getTheme } from "../../styles/theme";

import { Icon } from "../base/Icon";
import { Text } from "../base/Text";

import {
  moneyBagIcon,
  arrowUpIcon,
  arrowWaveUpRightIcon,
  arrowChevronDown,
  hamburgerMenuIcon,
} from "../../styles/icons";

const NavbarWrapper = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${(props) => getTheme(props).background.lightest};
`;

const NavbarButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const NavbarInfoWrapper = styled.div.attrs((props) => ({
  button: (props as any).button ? true : false,
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: ${(props) => (props.button ? "pointer" : "default")};
`;

interface NavbarInfoProps {
  iconSrc: any;
  title: string;
  value: string;
  type: "info" | "button";
}

function NavbarInfo({
  iconSrc,
  title,
  value,
  type,
}: NavbarInfoProps) {
  return (
    <>
      <NavbarInfoWrapper button={type === "button"}>
        <div>
          <Icon
            button={type === "button"}
            src={iconSrc}
            color={type === "info" ? "background" : "primary"}
            shade={type === "info" ? "dark" : "main"}
          />
        </div>
        <div>
          <Text
            variant="card_subtitle"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </Text>
          <br />
          <Text variant="card_info_1" selectable={type === "info"}>
            {value}
          </Text>
        </div>
      </NavbarInfoWrapper>
    </>
  );
}

const menu: NavbarInfoProps[] = [
  {
    title: "Saldo bruto",
    value: "130.521.230,02",
    iconSrc: moneyBagIcon,
    type: "info",
  },
  {
    title: "Valor aplicado",
    value: "521.230,02",
    iconSrc: arrowUpIcon,
    type: "info",
  },
  {
    title: "Rentabilidade",
    value: "2,34%",
    iconSrc: arrowWaveUpRightIcon,
    type: "info",
  },
  {
    title: "Carteira",
    value: "Minha carteira",
    iconSrc: arrowChevronDown,
    type: "button",
  },
];

export function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Image src={logo} alt="Kinvo Premium" />
        <NavbarButtons>
          {menu.map((props, index) => (
            <NavbarInfo {...props} key={index} />
          ))}
          <Icon button src={hamburgerMenuIcon} color="primary" />
        </NavbarButtons>
      </NavbarWrapper>
    </>
  );
}
