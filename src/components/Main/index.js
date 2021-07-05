import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
