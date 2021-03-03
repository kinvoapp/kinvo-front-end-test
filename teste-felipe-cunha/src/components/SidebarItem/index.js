import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { MdChevronRight } from 'react-icons/md';

import { Container, Icon, SubIcon,  Title, SubTitle } from './styles';

export default function SidebarItem({ to, text, subText, img, subImg }) {
  return (
    <Container>
      <NavLink to={to}>
        {img ?
        <Icon className="icon-box">
          <img src={img} alt="ativos" />
        </Icon>
        :
        <SubIcon>
          <img src={subImg} alt="subativos" />
        </SubIcon>
        }

        {text ?
        <Title>
          <h1>{text}</h1>
        </Title>
        :
        <SubTitle>
          <h1>{subText}</h1>
        </SubTitle>
        }
        <MdChevronRight size={25} color="#9DA5AC" />
      </NavLink>
    </Container>
  );
}

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  subText: PropTypes.string,
  img: PropTypes.string,
  subImg: PropTypes.string,
};
