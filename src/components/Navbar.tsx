import logo from "../assets/logo_kinvo_premium.svg";
import Image from "next/image";

import styled from "styled-components";

import { getTheme } from "../styles/theme";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100vw;
  padding: 3rem;
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
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </NavbarButtons>
      </NavbarWrapper>
    </>
  );
}
