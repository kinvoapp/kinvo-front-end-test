import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiBigDiamondRing } from 'react-icons/gi';
import {
  HiArrowUp,
  HiOutlineTrendingUp,
  HiChevronDown,
  HiMenu,
} from 'react-icons/hi';
import Logo from '../../assets/logo/logo';
import NavCard from './navCardWrapper';
import axios from '../../services/axios';

export default function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setData(res.data.data.snapshotByPortfolio);
      })
      .catch((e) => {
        return e;
      });
  }, [setData, data]);

  return (
    <>
      <HeaderContainer>
        <NavLink to="/" className="logo">
          <Logo />
          premium
        </NavLink>
        <Nav>
          <NavLink
            to="saldo_bruto"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            <NavCard
              title="saldo bruto"
              subTitle={data.equity?.toLocaleString('pt-BR')}
              icon={<GiBigDiamondRing />}
            />
          </NavLink>
          <NavLink
            to="valor_aplicado"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            <NavCard
              title="valor aplicado"
              subTitle={data.valueApplied?.toLocaleString('pt-BR')}
              icon={<HiArrowUp />}
            />
          </NavLink>
          <NavLink
            to="rentabilidade"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            <NavCard
              title="rentabilidade"
              subTitle={`${data.percentageProfit?.toLocaleString('pt-BR')}%`}
              icon={<HiOutlineTrendingUp />}
            />
          </NavLink>
          <NavLink
            to="minha_carteira"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            <NavCard
              title="carteira"
              subTitle="Minha Carteira"
              icon={<HiChevronDown />}
            />
          </NavLink>
          <HiMenu size={25} className="hamburguerMenu" />
        </Nav>
      </HeaderContainer>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 30px;
  z-index: 3;
  background-color: #fff;

  a {
    color: #707b81;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 30px;
    letter-spacing: -2px;
  }
`;

const Nav = styled.nav`
  display: flex;

  a {
    display: flex;
    margin-right: 30px;
    color: #707b81;

    &:hover {
      span {
        background-color: #4c309b;
        border: 1px solid #4c309b;
      }
    }
  }

  .active {
    span {
      background-color: #4c309b;
      border: 1px solid #4c309b;
    }
  }

  .hamburguerMenu {
    color: #fff;
    background-color: #4c309b;
    padding: 4px;
    border-radius: 50%;
  }
`;

const Container = styled.section`
  display: flex;
`;
