import styled from 'styled-components'

import ArrowRightIcon from '../../assets/images/arrow-right-icon.png'
import WalletSummaryIcon from '../../assets/images/wallet-summary-icon.png'
import ProductsIcon from '../../assets/images/products-icon.png'
import EarningsIcon from '../../assets/images/earnings-icon.png'
import AssetsIcon from '../../assets/images/assets-icon.png'
import RealRentabilityIcon from '../../assets/images/real-rentability-icon.png'
import WalletProjectionIcon from '../../assets/images/wallet-projection-icon.png'
import RiskReturnIcon from '../../assets/images/risk-return-icon.png'
import LockIcon from '../../assets/images/lock-icon.png'

const Wrapper = styled.aside`
  background-color: #FFF;
  grid-area: sidebar;
  transition: .3s ease-out;
  @media(max-width: 991px) {
    left: 0;
    position: absolute;
    top: 90px;
    transform: translateX(-100%);
  }
`

const Item = styled.div`
  border-bottom: 1px solid rgba(204, 207, 209, 0.35);
  cursor: pointer;
  transition: .3s ease-out;
  &:hover {
    background-color: #F8FAFB;
  }
  ${({ selected }) => selected && `
    background-color: #F8FAFB;
  `}
`

const ItemLink = styled.a`
  display: grid;
  grid-column-gap: 14px;
  grid-template-areas: "icon title arrow";
  grid-template-columns: auto 1fr auto;  
  padding: 18px 15.4px 17px 14px;
  &::before {
    background-image: url(${props => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    content: "";
    grid-area: icon;
    height: 34px;
    place-self: center;
    width: 34px;
  }
  &::after {
    background-image: url(${ArrowRightIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    content: "";
    grid-area: arrow;
    height: 10px;
    place-self: center;
    width: 6px;
  }
`

const ItemTitle = styled.div`
  font-size: 13px;
  grid-area: title;
  place-self: center flex-start;
`

const SubItens = styled.ul`
  background-color: #FFF;
  border-top: 1px solid rgba(204, 207, 209, 0.35);
  ${Item} {
    &:last-child {
      border-bottom: none;
    }
  }
  ${ItemLink} {
    padding-left: 22px;
    &::before {
      background-color: #4C309B;
      border-radius: 50%;
      height: 6px;
      width: 6px;
    }
  }
`

export default function Sidebar() {
  const SidebarItens = [
    {
      'icon' : WalletSummaryIcon,
      'title' : 'Resumo Da Carteira'
    },
    {
      'icon' : ProductsIcon,
      'title' : 'Resumo Da Carteira'
    },
    {
      'icon' : EarningsIcon,
      'title' : 'Meus Proventos'
    },
    {
      'icon' : AssetsIcon,
      'title' : 'Classe de Ativos',
      'selected' : true,
      'subItens' : [
        {'title' : 'Ação'},
        {'title' : 'Fundo'},
        {'title' : 'Fundo Imobiliário'},
        {'title' : 'Fundo Renda Fixa', 'selected' : true}
      ]
    },
    {
      'icon' : RealRentabilityIcon,
      'title' : 'Rentabilidade Real'
    },
    {
      'icon' : WalletProjectionIcon,
      'title' : 'Projeção da Carteira'
    },
    {
      'icon' : RiskReturnIcon,
      'title' : 'Risco x Retorno'
    },
    {
      'icon' : LockIcon,
      'title' : 'Cobertura do FGC'
    }
  ]

  return (
    <Wrapper>
      {SidebarItens.map((i, index) => (
        <Item selected={(i.selected) && 'selected'} key={index}>
          <ItemLink icon={i.icon}>
            <ItemTitle>{i.title}</ItemTitle>
          </ItemLink>
          {i.subItens &&
          <SubItens key={index + 0.5}>
            {i.subItens.map((i, index) => (
              <Item selected={(i.selected) && 'selected'} key={index}>
                <ItemLink>
                  <ItemTitle>{i.title}</ItemTitle>
                </ItemLink>
              </Item>
            ))}
          </SubItens>
          }
        </Item>
      ))}
    </Wrapper>
  )
}