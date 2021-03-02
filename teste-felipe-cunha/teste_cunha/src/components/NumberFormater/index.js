import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export default function NumberFormater({ value, prefix, sufix }) {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      thousandSeparator
      prefix={prefix}
      suffix={sufix}
    />
  );
}

NumberFormater.propTypes = {
  value: PropTypes.number,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
};

NumberFormater.defaultProps = {
  value: 0,
  prefix: null,
  sufix: null,
};
