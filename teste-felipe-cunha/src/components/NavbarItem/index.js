import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import { NavLink } from 'react-router-dom';

import { Container, Icon, Title } from './styles';

export default function SidebarItem({ to, textUp, text, number, percent, img }) {
  return (
    <Container>
      <NavLink to={to}>
        <Icon className="icon-box">
          <img src={img} alt="ativos" />
        </Icon>
        <Title>
          <h5>{textUp}</h5>
          
          <h1>{text}</h1>

          <h1>
            <NumberFormat
              value={number}
              displayType="text"
              thousandSeparator
            />
          </h1>

          <h1>
            <NumberFormat
              value={percent}
              displayType="text"
              thousandSeparator
              suffix="%"
            />
          </h1>
        </Title>
      </NavLink>
    </Container>
  );
}

SidebarItem.propTypes = {
  to: PropTypes.string,
  textUp: PropTypes.string,
  text: PropTypes.string,
  number: PropTypes.number,
  percent: PropTypes.number,
  img: PropTypes.string.isRequired,
};
