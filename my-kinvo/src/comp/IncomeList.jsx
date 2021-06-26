import React from 'react';
import PropTypes from 'prop-types';

import IncomePositionCard from './IncomePositionCard';
import IncomeTitleCard from './IncomeTitleCard';
import IncomeDueCard from './IncomeDueCard';

class IncomeList extends React.Component {
  render() {
    const { incomesToRender } = this.props;
    return (
      <div data-testid="income-list" className="income-list">
        { incomesToRender && incomesToRender.map((income, index) => (
          <div className="income">
          <IncomeTitleCard key={ income.fixedIncome.portfolioProductId } income={ income } />
          <IncomePositionCard key={ income.position.equity } income={ income } />
          <IncomeDueCard key={ index } income={ income } />
          </div>
        )) }
      </div>
    );
  }
}

IncomeList.propTypes = {
  incomesToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IncomeList;