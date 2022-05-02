import React from "react";
import HomeDataDue from "./HomeDataDue/HomeDataDue";
import HomeDataFixedIncome from "./HomeDataFixedIncome/HomeDataFixedIncome";
import HomeDataPosition from "./HomeDataPosition/HomeDataPosition";
import "./HomeDataProfit.scss";

const HomeDataProfit = ({ title, data }) => {
  const [sort, setSort] = React.useState(data);

  //*Input Filter
  const searchFilter = (event) => {
    const dataFilter = event.target.value;
    const filter = []
      .concat(data)
      .filter((filtered) =>
        filtered.fixedIncome.name.toLowerCase().includes(dataFilter.toLowerCase())
      )
      .map((item) => item);
    return setSort(filter);
  };

  //*Search Ascendent Function
  const nameOrderASC = []
    .concat(data)
    .sort((a, b) => (a.fixedIncome.name.toLowerCase() > b.fixedIncome.name.toLowerCase() ? 1 : -1))
    .map((item) => item);

  //*Search Descendent Function
  const nameOrderDSC = []
    .concat(data)
    .sort((a, b) => (a.fixedIncome.name.toLowerCase() < b.fixedIncome.name.toLowerCase() ? 1 : -1))
    .map((item) => item);

  //*Search Order By Date Due Function (Min to Max)
  const dateDueOrder = []
    .concat(data)
    .sort((a, b) => {
      const dateA = new Date(a.due.date.split("/").reverse().join("-"));
      const dateB = new Date(b.due.date.split("/").reverse().join("-"));
      return dateA - dateB;
    })
    .map((item) => item);

  //*Search By Equity Function (Min to Max)
  const positionEquitMax = []
    .concat(data)
    .sort((a, b) => a.position.equity - b.position.equity)
    .map((item) => item);

  //*Search By Equity Function (Max to Min)
  const positionEquitMin = []
    .concat(data)
    .sort((a, b) => b.position.equity - a.position.equity)
    .map((item) => item);
    
  //*Switcher Options
  const handleChange = (event) => {
    switch (event.target.value) {
      case "1":
        return setSort(nameOrderASC);
      case "2":
        return setSort(nameOrderDSC);
      case "3":
        return setSort(dateDueOrder);
      case "4":
        return setSort(positionEquitMax);
      case "5":
        return setSort(positionEquitMin);
      default:
        return setSort(data);
    }
  };

  return (
    <div className="home-data-profit">
      <div className="home-data-title">
        <h1>{title}</h1>
        <div className="home-data-filter">
          <select name="filter" onChange={handleChange}>
            <option value="0">Filtrar por</option>
            <option value="1">Ordem Alfabêtica A-Z</option>
            <option value="2">Ordem Alfabêtica Z-A</option>
            <option value="3">Data Venc </option>
            <option value="4">Valor Inves.(Min - Max)</option>
            <option value="5">Valor Inves.(Max - Min)</option>
          </select>
          <input type="text" onChange={searchFilter} />
        </div>
      </div>

      {data &&
        sort.map(({ fixedIncome, position, due }) => (
          <section key={fixedIncome.name} className="home-data-profits-list">
            <HomeDataFixedIncome fixedIncome={fixedIncome} />
            <HomeDataPosition position={position} />
            <HomeDataDue due={due} />
          </section>
        ))}
    </div>
  );
};

export default HomeDataProfit;
