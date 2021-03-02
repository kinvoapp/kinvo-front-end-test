import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Container } from './styles';

export default function SmallCard({ text, value, prefix, sufix }) {
  return (
    <Container>
      <p>{text}</p>
      <h1>
        <NumberFormat
          value={value}
          displayType="text"
          thousandSeparator
          prefix={prefix}
          suffix={sufix}
        />
      </h1>
    </Container>
  );
}

SmallCard.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
};

SmallCard.defaultProps = {
  value: 0,
  prefix: null,
  sufix: null,
};
