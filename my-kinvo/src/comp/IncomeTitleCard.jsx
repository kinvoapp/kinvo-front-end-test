import React from 'react';
import PropTypes from 'prop-types';

class IncomeTitleCard extends React.Component {
  render() {
    const { income } = this.props;
    const { fixedIncome: { bondType, name } } = income;
    return (
      <div className="income-card" data-testid="income-card">
        <div className="income-card-body">
          <h5>TÍTULO</h5>
          <p className="name">{name}</p>
          <label htmlFor="bondType"
        data-testid="classe-label"
            > CLASSE
          <p className="bondType">{bondType}</p>
          </label>
        </div>
      </div>
    );
  }
}

IncomeTitleCard.propTypes = {
  income: PropTypes.shape({
    name: PropTypes.string,
    bondType: PropTypes.string,
  }).isRequired,
};

export default IncomeTitleCard;