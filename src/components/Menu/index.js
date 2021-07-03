import React, { useState } from 'react';
import { ReactComponent as WalletSummary } from '../../assets/wallet-summary.svg';
import { ReactComponent as MyProducts } from '../../assets/my-products.svg';
import { ReactComponent as MyEarnings } from '../../assets/my-earnings.svg';
import { ReactComponent as AssetClass } from '../../assets/asset-class.svg';
import { ReactComponent as RealRentability } from '../../assets/real-rentability.svg';
import { ReactComponent as WalletProjection } from '../../assets/wallet-projection.svg';
import { ReactComponent as RiskXReturn } from '../../assets/risk-x-return.svg';
import { ReactComponent as FGCCoverage } from '../../assets/fgc-coverage.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { Wrapper, NavItem, SubItem } from './styles';

export const Menu = () => {
  const [isOpened, setIsOpened] = useState(true);

  const menuItems = [
    {
      title: (
        <span>
          Resumo da
          <br />
          Carteira
        </span>
      ),
      icon: <WalletSummary />,
      path: '/resumo-da-carteira',
    },
    {
      title: (
        <span>
          Meus
          <br />
          Produtos
        </span>
      ),
      icon: <MyProducts />,
      path: '/meus-produtos',
    },
    {
      title: (
        <span>
          Meus
          <br />
          Proventos
        </span>
      ),
      icon: <MyEarnings />,
      path: '/meus-proventos',
    },
    {
      title: (
        <span>
          Classe
          <br />
          de Ativos
        </span>
      ),
      icon: <AssetClass />,
      path: '/',
      subMenu: [
        { title: 'Ação', active: false },
        { title: 'Fundo', active: false },
        { title: 'Fundo Imobiliário', active: false },
        { title: 'Fundo Renda Fixa', active: true },
      ],
    },
    {
      title: (
        <span>
          Rentabilidade
          <br />
          Real
        </span>
      ),
      icon: <RealRentability />,
      path: '/rentabilidade-real',
    },
    {
      title: (
        <span>
          Projeção
          <br />
          da Carteira
        </span>
      ),
      icon: <WalletProjection />,
      path: '/projecao-da-carteira',
    },
    {
      title: (
        <span>
          Risco
          <br />x Retorno
        </span>
      ),
      icon: <RiskXReturn />,
      path: '/risco-e-retorno',
    },
    {
      title: (
        <span>
          Cobertura
          <br />
          do FGC
        </span>
      ),
      icon: <FGCCoverage />,
      path: '/cobertura-do-fgc',
    },
  ];

  return (
    <Wrapper>
      {menuItems.map(({ title, icon, path, subMenu }) => (
        <>
          <NavItem
            active={window.location.pathname === path}
            onClick={() => subMenu && setIsOpened(!isOpened)}
            className={subMenu && isOpened && 'active'}
          >
            <div>{icon}</div>
            <h1>{title}</h1>
            <span
              style={{
                transform: subMenu && isOpened && 'rotate(-90deg)',
                transition: '0.2s',
              }}
            >
              <Arrow />
            </span>
          </NavItem>
          {subMenu &&
            subMenu.map(({ title: subMenuTitle, active }) => (
              <ul style={{ margin: 0, padding: 0 }}>
                {isOpened && (
                  <SubItem className={active && 'active'}>
                    {subMenuTitle}
                    <Arrow />
                  </SubItem>
                )}
              </ul>
            ))}
        </>
      ))}
    </Wrapper>
  );
};
