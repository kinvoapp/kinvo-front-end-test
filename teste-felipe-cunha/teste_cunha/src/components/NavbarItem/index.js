import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { Container, Icon, Title } from './styles';

export default function SidebarItem({ to, textUp, text, img }) {
  return (
    <Container>
      <NavLink to={to}>
        <Icon className="icon-box">
          <img src={img} alt="ativos" />
        </Icon>
        { (textUp && text) &&
        <Title>
          <h5>{textUp}</h5>
          <h1>{text}</h1>
        </Title>}
      </NavLink>
    </Container>
  );
}

SidebarItem.propTypes = {
  to: PropTypes.string,
  textUp: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string.isRequired,
};
