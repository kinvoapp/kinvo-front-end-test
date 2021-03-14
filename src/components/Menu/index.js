import * as S from "./styles";

import Balance from "../../assets/balanco.svg";
import Logo from "../../assets/logo.svg";
import MyWallet from "../../assets/minha-carteira.svg";
import Mobile from "../../assets/mobile.svg";
import Rentability from "../../assets/rentabilidade.svg";
import Up from "../../assets/up.svg";

const Menu = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo src={Logo} alt="logo kinvo premium" />
        <S.NavMenu>
          <S.ItemMenu>
            <img src={Balance} alt="ícone de balance" />
            <S.InfoMenu>
              <S.TitleMenu>Saldo bruto</S.TitleMenu>
              <S.ContentMenu>130.521.230,02</S.ContentMenu>
            </S.InfoMenu>
          </S.ItemMenu>

          <S.ItemMenu>
            <img src={Up} alt="ícone de seta para cima" />
            <S.InfoMenu>
              <S.TitleMenu>Valor aplicado</S.TitleMenu>
              <S.ContentMenu>521.230,02</S.ContentMenu>
            </S.InfoMenu>
          </S.ItemMenu>

          <S.ItemMenu>
            <img src={Rentability} alt="ícone de rentabilidade" />
            <S.InfoMenu>
              <S.TitleMenu>Rentabilidade</S.TitleMenu>
              <S.ContentMenu>2,34%</S.ContentMenu>
            </S.InfoMenu>
          </S.ItemMenu>

          <S.ItemMenu>
            <img src={MyWallet} alt="ícone de seta para baixo" />
            <S.InfoMenu>
              <S.TitleMenu>
                <strong>Carteira</strong>
              </S.TitleMenu>
              <S.ContentMenu>Minha Carteira</S.ContentMenu>
            </S.InfoMenu>
          </S.ItemMenu>

          <S.ItemMenu>
            <img src={Mobile} alt="ícone mobile" />
          </S.ItemMenu>
        </S.NavMenu>
      </S.Container>
    </S.Header>
  );
};

export default Menu;
