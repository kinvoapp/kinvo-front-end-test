import React from 'react';
import PropTypes from 'prop-types';
import './FixedIncomeDueTag.css';

function FixedIncomeDueTag({ due }) {
  const { date, daysUntilExpiration } = due;
  return (
    <div className="duetag-container">
      <h3 className="title-label">VENCIMENTO</h3>
      <div className="due-container">
        <div className="due-info">
          <h4>DATA VENC.</h4>
          <p>{date}</p>
        </div>
        <div className="due-info">
          <h4>DIAS ATÉ VENC.</h4>
          <p>{daysUntilExpiration}</p>
        </div>
      </div>
    </div>
  );
}

FixedIncomeDueTag.propTypes = {
  due: PropTypes.shape({
    date: PropTypes.string,
    daysUntilExpiration: PropTypes.number,
  }).isRequired,
};

export default FixedIncomeDueTag;
