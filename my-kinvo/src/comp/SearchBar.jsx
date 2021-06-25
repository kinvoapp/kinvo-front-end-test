import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  onSearchTextChange (event) {
    this.setState({ searchText: event.target.value});
  }

  inputText(searchText, onSearchTextChange) {
    return (
      <label
        htmlFor="searchText"
        data-testid="text-input-label"
        className="label"
      >
        Inclui o texto
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          className="input"
        />
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form" className="form">
        {this.inputText(searchText, onSearchTextChange)}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
}

export default SearchBar;