import React from 'react';
import PropTypes from 'prop-types';
import './FixedIncomePositionTag.css';

function FixedIncomePositionTag({ position }) {
  const {
    equity,
    indexerLabel,
    indexerValue,
    percentageOverIndexer,
    portfolioPercentage,
    profitability,
    valueApplied,
  } = position;
  return (
    <div className="positiontag-container">
      <h3 className="title-label">MINHA POSIÇÃO</h3>
      <div className="position-container">
        <div className="position-info">
          <h4>VALOR INVES.</h4>
          <p>{valueApplied.toLocaleString('pt-BR')}</p>
        </div>
        <div className="position-info">
          <h4>SALDO BRUTO</h4>
          <p>{equity.toLocaleString('pt-BR')}</p>
        </div>
        <div className="position-info">
          <h4>RENT.</h4>
          <p>
            { profitability }
            %
          </p>
        </div>
        <div className="position-info">
          <h4>
            % DA CART.
          </h4>
          <p>
            { portfolioPercentage }
            %
          </p>
        </div>
        <div className="position-info">
          <h4>{ indexerLabel }</h4>
          <p>{parseFloat(indexerValue)}</p>
        </div>
        <div className="position-info">
          <h4>
            SOBRE
            { indexerLabel }
          </h4>
          <p>{parseInt(percentageOverIndexer, 10)}</p>
        </div>
      </div>
    </div>
  );
}

FixedIncomePositionTag.propTypes = {
  position: PropTypes.shape({
    equity: PropTypes.number,
    indexerLabel: PropTypes.string,
    indexerValue: PropTypes.number,
    percentageOverIndexer: PropTypes.number,
    portfolioPercentage: PropTypes.number,
    profitability: PropTypes.number,
    valueApplied: PropTypes.number,
  }).isRequired,
};

export default FixedIncomePositionTag;
