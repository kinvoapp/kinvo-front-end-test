import React from 'react';
import PropTypes from 'prop-types';
import './FixedIncomeNameTag.css';

function FixedIncomeNameTag({ fixedIncome }) {
  const { name, bondType } = fixedIncome;
  return (
    <div className="nametag-container">
      <h3 className="title-label">TÍTULO</h3>
      <div className="info-container">
        <div className="income-name">
          { name }
        </div>
        <div className="income-class">
          <p className="class-label">CLASSE</p>
          <p className="class-name">{ bondType }</p>
        </div>
      </div>
    </div>
  );
}

FixedIncomeNameTag.propTypes = {
  fixedIncome: PropTypes.shape({
    name: PropTypes.string,
    bondType: PropTypes.string,
  }).isRequired,
};

export default FixedIncomeNameTag;
