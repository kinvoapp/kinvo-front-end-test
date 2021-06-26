import React from "react";

class SortForm extends React.Component {
  render() {
    const fields = [
      "valueApplied",
      "equity",
      "percentageProfit",
      "portfolioPercentage",
      "indexerValue",
      "percentageOverIndexer",
    ];

    const { handleChange, handleSort } = this.props;

    return (
      <>
        <select
          name="sortBy"
          onChange={handleChange}
          data-testid="field-sort"
        >
          {fields.map((fieldOption) => (
            <option key={fieldOption}>{fieldOption}</option>
          ))}
        </select>
        <span>
          <label htmlFor="ASC">
            Ascendent
            <input
              type="radio"
              data-testid="field-sort-input-asc"
              value="ASC"
              id="ASC"
              name="sort"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="DESC">
            Descendent
            <input
              type="radio"
              data-testid="field-sort-input-desc"
              value="DESC"
              id="DESC"
              onChange={handleChange}
              name="sort"
            />
          </label>
        </span>
        <button
          type="button"
          data-testid="field-sort-button"
          onClick={handleSort}
        >
          Sort
        </button>
      </>
    );
  }
}

export default SortForm;
