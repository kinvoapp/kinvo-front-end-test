import React from 'react';
import PropTypes from 'prop-types';

class IncomeCard extends React.Component {
  render() {
    const { income } = this.props;
    const { position: { valueApplied, equity, percentageProfit, portfolioPercentage, indexerValue, percentageOverIndexer } } = income;
    return (
      <div className="income-card" data-testid="income-card">
        <div className="income-card-body">
          <h5>MINHA POSIÇÃO</h5>
          <label htmlFor="valueApplied"
        data-testid="value-applied-label"> VALOR INVEST
          <p className="valueApplied">{valueApplied}</p>
        </label>
        <label htmlFor="equity"
        data-testid="equity-label"> SALDO BRUTO
          <p className="equity">{equity}</p>
          </label>
          <label htmlFor="percentageProfit"
        data-testid="percentage-profit-label"> RENT.
          <p className="percentageProfit">{percentageProfit}</p>
          </label>
          <label htmlFor="portfolioPercentage"
        data-testid="percentage-portfolio-label"> % DA CART.
          <p className="portfolioPercentage">{portfolioPercentage}</p>
          </label>
          <label htmlFor="indexerValue"
        data-testid="cdi-label"> CDI
          <p className="indexerValue">{indexerValue}</p>
          </label>
          <label htmlFor="percentageOverIndexer"
        data-testid="value-applied-label"> SOBRE CDI
          <p className="percentageOverIndexer">{percentageOverIndexer}</p>
          </label>
        </div>
      </div>
    );
  }
}

IncomeCard.propTypes = {
  income: PropTypes.shape({
    valueApplied: PropTypes.number,
    equity: PropTypes.number,
    percentageProfit: PropTypes.number,
    portfolioPercentage: PropTypes.number,
    indexerValue: PropTypes.number,
    percentageOverIndexer: PropTypes.number,
  }).isRequired,
};

export default IncomeCard; 