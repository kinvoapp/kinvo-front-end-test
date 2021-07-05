import React, { useState, useContext, useEffect } from 'react';
import FixedIncomeCard from './FixedIncomeCard';
import AppContext from '../context/AppContext';
import sortCategories from '../utils/sortCategories';
import './FixedIncomeDisplayer.css';

function FixedIncomeDisplayer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortType, setSortType] = useState('');
  const { snapshotByProduct, isFetching } = useContext(AppContext);

  const getSortCategory = (searchObject, sortTypeName) => (
    Object.keys(searchObject).find(
      (key) => searchObject[key].includes(sortTypeName),
    )
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const renderFixedIncomes = () => (
    searchResults.map((income, index) => (
      <FixedIncomeCard key={ index } data={ income } />
    ))
  );

  useEffect(() => {
    setSearchResults(snapshotByProduct);
  }, [isFetching]);

  useEffect(() => {
    const filteredResults = snapshotByProduct
      .filter((product) => {
        const { fixedIncome: { name } } = product;
        const lowerCaseProductName = name.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
        return lowerCaseProductName.includes(lowerCaseSearchTerm);
      });
    setSearchResults(filteredResults);
  }, [searchTerm]);

  useEffect(() => {
    const elementAWillBeAfter = -1;
    const elementBWillBeAfter = 1;
    const elementsWillRemainStill = 0;
    const previousResults = [...searchResults];
    const sortCategory = getSortCategory(sortCategories, sortType);
    const comparisonType = ['due', 'fixedIncome'].includes(sortCategory)
      ? 'string'
      : 'numeric';
    let sortedResults;
    switch (comparisonType) {
    case 'string':
      sortedResults = previousResults
        .sort((a, b) => {
          if (a[sortCategory][sortType] < b[sortCategory][sortType]) {
            return elementAWillBeAfter;
          }
          if (a[sortCategory][sortType] > b[sortCategory][sortType]) {
            return elementBWillBeAfter;
          }
          return elementsWillRemainStill;
        });
      break;
    case 'numeric':
      sortedResults = previousResults
        .sort((a, b) => a - b);
      break;
    default:
      break;
    }
    setSearchResults(sortedResults);
  }, [sortType]);

  return (
    <section className="income-displayer">
      <div className="income-displayer-header">
        <h2 className="oplas">Minhas Rendas Fixas</h2>
        <select
          className="sort-input"
          name="order"
          onChange={ (event) => handleSortChange(event) }
          defaultValue="DEFAULT"
        >
          <option
            value="DEFAULT"
            disabled
          >
            Ordenar por
          </option>
          <option value="name">Nome</option>
          <option value="bondType">Classe</option>
          <option value="date">Data Vencimento</option>
          <option
            value="daysUntilExpiration"
          >
            Dias até Vencimento
          </option>
          <option value="equity">Saldo Bruto</option>
          <option value="valueApplied">Valor Investido</option>
          <option value="profitability">Rentabilidade</option>
          <option
            value="portfolioPercentage"
          >
            Percentual da Carteira
          </option>
          <option
            value="percentageOverIndexer"
          >
            Percentual sobre CDI
          </option>
        </select>
        <input
          className="search-input"
          type="text"
          value={ searchTerm }
          placeholder="Busca"
          onChange={ (event) => handleSearchChange(event) }
        />
      </div>
      { isFetching ? <div>Loading...</div> : renderFixedIncomes() }
    </section>
  );
}

export default FixedIncomeDisplayer;
