import React from 'react';
import PropTypes from 'prop-types';

import IncomeList from './IncomeList';
import snapshotByProduct from '../services/services';
import SearchBar from './SearchBar';

class IncomesLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      snapshotByProduct: [],
      snapshotByProduct2: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterIncomes = this.filterIncomes.bind(this);
  }

  componentDidMount = async () => {
    const result = await snapshotByProduct();
    this.setState({ snapshotByProduct: result, snapshotByProduct2: result });
  }

  filterIncomes() {
    const { searchText, snapshotByProduct } = this.state;
    console.log(snapshotByProduct);
    let incomesToRender = snapshotByProduct
      .filter(
        (income) => 
        income.fixedIncome.bondType.toLowerCase().includes(searchText) ||
        income.fixedIncome.name.toLowerCase().includes(searchText)
      );
    this.setState({ snapshotByProduct2: incomesToRender })
  }

  handleChange( event ) {
    this.setState(() => ({ searchText: event.target.value }), () => this.filterIncomes() );
  }


  render() {
    const { searchText, snapshotByProduct2 } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
        />
        <IncomeList incomesToRender={ snapshotByProduct2 } />
      </div>
    );
  }
}

IncomesLibrary.propTypes = {
  snapshotByProduct: PropTypes.arrayOf(PropTypes.object),
};

export default IncomesLibrary;