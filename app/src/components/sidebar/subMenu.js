/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { VscCircleFilled } from 'react-icons/vsc';

export default function SubMenu({ item, index }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <Container>
      <NavLink
        to={item.url}
        onClick={showSubnav}
        key={index}
        className={({ isActive }) => (isActive ? 'linkActive' : undefined)}
      >
        <div>
          <span>{item.icon}</span>
          <LinkTitle>{item.title}</LinkTitle>
        </div>
        <ArrowIcon>{item.arrowIcon}</ArrowIcon>
      </NavLink>
      {subnav &&
        item.subNav.map((data, i) => {
          return (
            <NavLink
              to={data.url}
              key={i}
              className={({ isActive }) =>
                isActive ? 'sublinkActive' : undefined
              }
            >
              <div>
                <CircleFilled />
                <li>{data.title}</li>
              </div>
              <ArrowIcon>{item.arrowIcon}</ArrowIcon>
            </NavLink>
          );
        })}
    </Container>
  );
}

// Styles
const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    color: #707b81;
    background-color: #fff;
    font-size: 14px;
    box-shadow: inset 1px 1px 30px -10px rgba(50, 50, 50, 0.06);
    border-bottom: 2px solid #eef2f4;

    div {
      display: flex;
      align-items: center;
    }

    span {
      display: flex;
      padding: 4px;
      color: #fff;
      background-color: #dae0e3;
      border-radius: 50%;
    }

    li {
      font-size: 13px;
    }

    &.linkActive,
    &:hover {
      background-color: #f8fafb;

      span {
        background-color: #4c309b;
      }
    }

    &.sublinkActive {
      background-color: #f8fafb;
    }
  }
`;

const LinkTitle = styled.div`
  margin-left: 15px;
`;

const ArrowIcon = styled.div`
  padding: 0 0 0 25px;
`;

const CircleFilled = styled(VscCircleFilled)`
  color: #4c309b;
  margin-right: 8px;
`;
