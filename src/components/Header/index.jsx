import { HeaderItem } from "./HeaderItem";

import { Wrapper, Content, ItemsContainer } from "./styles";
import LogoImg from "../../assets/logo.svg";
import MenuIcon from "../../assets/icons/menuPurple.svg";
import MoneyIcon from "../../assets/icons/money.svg";
import RentabilityIcon from "../../assets/icons/rentability.svg";
import ArrowUpIcon from "../../assets/icons/arrowUpGray.svg";
import ArrowDownIcon from "../../assets/icons/arrowDownPurple.svg";

export function Header() {
  return (
    <Wrapper>
      <Content>
        <img src={LogoImg} alt="logo" />

        <ItemsContainer>
          <HeaderItem icon={MoneyIcon} title="SALDO BRUTO" value="130.521.230,02" />
          <HeaderItem icon={ArrowUpIcon} title="VALOR APLICADO" value="521.230,02" />
          <HeaderItem icon={RentabilityIcon} title="RENTABILIDADE" value="2,34%" />
          <HeaderItem icon={ArrowDownIcon} title="Carteira" value="MINHA CARTEIRA" />
          <img src={MenuIcon} alt="menu" />
        </ItemsContainer>
      </Content>
    </Wrapper>
  );
}
