import React, { Fragment, useState } from 'react';

import ImgWalletSummary from '../../assets/wallet-summary.svg';
import ImgMyProducts from '../../assets/my-products.svg';
import ImgMyEarnings from '../../assets/my-earnings.svg';
import ImgAssetClass from '../../assets/asset-class.svg';
import ImgRealRentability from '../../assets/real-rentability.svg';
import ImgWalletProjection from '../../assets/wallet-projection.svg';
import ImgRiskXReturn from '../../assets/risk-x-return.svg';
import ImgFGCCoverage from '../../assets/fgc-coverage.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { Container, NavItem, SubItem } from './styles';

export const MenuLateral = () => {
  const [isOpened, setIsOpened] = useState(true);

  const menuItems = [
    {
      title: (
        <span>
          Resumo
          <br />
          da Carteira
        </span>
      ),
      icon: <img src={ImgWalletSummary} alt="ImgWalletSummary" />,
      path: '/wallet-summary',
    },
    {
      title: (
        <span>
          Meus
          <br />
          Produtos
        </span>
      ),
      icon: <img src={ImgMyProducts} alt="ImgMyProducts" />,
      path: '/my-products',
    },
    {
      title: (
        <span>
          Meus
          <br />
          Proventos
        </span>
      ),
      icon: <img src={ImgMyEarnings} alt="ImgMyEarnings" />,
      path: '/my-earnings',
    },
    {
      title: (
        <span>
          Classe
          <br />
          de Ativos
        </span>
      ),
      icon: <img src={ImgAssetClass} alt="ImgAssetClass" color="#5D41AC"/>,
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
      icon: <img src={ImgRealRentability} alt="ImgRealRentability" />,
      path: '/real-rentability',
    },
    {
      title: (
        <span>
          Projeção
          <br />
          da Carteira
        </span>
      ),
      icon: <img src={ImgWalletProjection} alt="ImgWalletProjection " />,
      path: '/wallet-projection',
    },
    {
      title: (
        <span>
          Risco x
          <br />
          Retorno
        </span>
      ),
      icon: <img src={ImgRiskXReturn} alt="ImgRiskXReturn" />,
      path: '/risk-and-return',
    },
    {
      title: (
        <span>
          Cobertura
          <br />
          do FGC
        </span>
      ),
      icon: <img src={ImgFGCCoverage} alt="ImgFGCCoverage" />,
      path: '/fgc-coverage',
    },
  ];

  return (
    <Container>
      {menuItems.map(({ title, icon, path, subMenu }) => (
        <Fragment key={path}>
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
          {subMenu && (
            <ul style={{ margin: 0, padding: 0 }}>
              {subMenu.map(({ title: subMenuTitle, active }) => (
                <Fragment key={subMenuTitle}>
                  {isOpened && (
                    <SubItem className={active && 'active'}>
                      {subMenuTitle}
                      <Arrow />
                    </SubItem>
                  )}
                </Fragment>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </Container>
  );
};

