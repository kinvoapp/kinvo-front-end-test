import React from 'react';
import PropTypes from 'prop-types';

class IncomeDueCard extends React.Component {
  render() {
    const { income } = this.props;
    const { due: { date, daysUntilExpiration } } = income;
    return (
      <div className="income-card" data-testid="income-card">
        <div className="income-card-body">
          <h5>VENCIMENTO</h5>
          <label htmlFor="bondType"
        data-testid="date-label"
            > DATA DE VENC.
          <p className="dua">{date}</p>
          </label>
          <label htmlFor="bondType"
        data-testid="dias-venc-label"
            > DIAS ATÉ VENC.
          <p className="daysUntilExpiration">{daysUntilExpiration}</p>
          </label>
        </div>
      </div>
    );
  }
}

IncomeDueCard.propTypes = {
  income: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    daysUntilExpiration: PropTypes.number,
  }).isRequired,
};

export default IncomeDueCard;