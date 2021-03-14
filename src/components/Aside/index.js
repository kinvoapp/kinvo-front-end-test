import * as S from "./styles";

import Activies from "../../assets/ativos.svg";
import Covered from "../../assets/cobertura.svg";
import Earnings from "../../assets/proventos.svg";
import Products from "../../assets/produtos.svg";
import ProjectionOfWallet from "../../assets/projecao.svg";
import Rentability from "../../assets/rentabilidade-aside.svg";
import Resume from "../../assets/resumo.svg";
import RiskAndReturn from "../../assets/retorno.svg";

const Aside = () => {
  return (
    <S.Container>
      <S.ListAside>
        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside src={Resume} alt="ícone de resumo de carteira" />
            <S.TitleAside>Resumo Da Carteira</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside src={Products} alt="ícone de Meus produtos" />
            <S.TitleAside>Meus Produtos</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside src={Earnings} alt="ícone de Meus proventos" />
            <S.TitleAside>Meus Proventos</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside isActive>
            <S.IconAside src={Activies} alt="ícone de Classe de ativos" />
            <S.TitleAside>Classe de Ativos</S.TitleAside>
          </S.ListItemAside>
          <S.DropMenuItems>
            <S.DropMenuItem>Ação</S.DropMenuItem>
            <S.DropMenuItem>Fundo</S.DropMenuItem>
            <S.DropMenuItem>Fundo Imobiliário</S.DropMenuItem>
            <S.DropMenuItem>Fundo Renda Fixa</S.DropMenuItem>
          </S.DropMenuItems>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside src={Rentability} alt="ícone de Rentabilidade real" />
            <S.TitleAside>Rentabilidade Real</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside
              src={ProjectionOfWallet}
              alt="ícone de projeção da Carteira"
            />
            <S.TitleAside>Projeção da Carteira</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside src={RiskAndReturn} alt="ícone de Risco x retorno" />
            <S.TitleAside>Risco x Retorno</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>

        <S.ListItemAsideContainer>
          <S.ListItemAside>
            <S.IconAside src={Covered} alt="ícone de Cobertura do FGC" />
            <S.TitleAside>Cobertura do FGC</S.TitleAside>
          </S.ListItemAside>
        </S.ListItemAsideContainer>
      </S.ListAside>
    </S.Container>
  );
};

export default Aside;
