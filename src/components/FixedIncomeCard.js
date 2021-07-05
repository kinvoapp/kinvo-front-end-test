import React from 'react';
import PropTypes from 'prop-types';
import FixedIncomeNameTag from './FixedIncomeNameTag';
import FixedIncomePositionTag from './FixedIncomePositionTag';
import FixedIncomeDueTag from './FixedIncomeDueTag';
import './FixedIncomeCard.css';

function FixedIncomeCard({ data }) {
  const { due, fixedIncome, position } = data;
  return (
    <article className="fixed-income-card-container">
      <FixedIncomeNameTag fixedIncome={ fixedIncome } />
      <FixedIncomePositionTag position={ position } />
      <FixedIncomeDueTag due={ due } />
    </article>
  );
}

FixedIncomeCard.propTypes = {
  data: PropTypes.shape({
    due: PropTypes.shape,
    fixedIncome: PropTypes.shape,
    position: PropTypes.shape,
  }).isRequired,
};

export default FixedIncomeCard;
