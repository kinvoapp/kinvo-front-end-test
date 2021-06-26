import React from 'react';
import PropTypes from 'prop-types';

import IncomeList from './IncomeList';
import SearchBar from './SearchBar';

class IncomesLibrary extends React.Component {
  render() {
    const { handleChange, searchText, snapshotByProduct2 } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
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