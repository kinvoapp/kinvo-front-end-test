import React, { useEffect, useState, useMemo } from "react";
import { Main } from "./styles";

import Loading from "../Loading";
import DashboardPortfolio from "../DashboardPortfolio";
import TitlesProfitability from "../TitlesProfitability"
import MyFixedIncome from "../MyFixedIncome";
import PortfolioByTypes from '../PortfolioByTypes';
import PortfolioByTitles from "../PortfolioByTitles";

import api from "../../api/api";

function Dashboard() {
  const [portfolio, setPortfolio] = useState({});
  const [products, setProducts] = useState([]);
  const [chartData, setChatData] = useState([])
  const [orderBy, setOrderBy] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("getFixedIncomeClassData")
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.data.snapshotByProduct);
        setPortfolio(data.data.snapshotByPortfolio);
        setChatData(data.data.dailyEquityByPortfolioChartData)
        setLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {

    if (!filter)
      return products.sort((a, b) => b.position[orderBy] - a.position[orderBy]);

    return products
      .sort((a, b) => b.position[orderBy] - a.position[orderBy])
      .filter((product) =>
        product.fixedIncome.name.toLowerCase().includes(filter.toLowerCase())
      );
  }, [filter, products, orderBy]);

  if (loading) {
    return (
      <Main>
        <Loading />
      </Main>

    )
  }

  return (
    <Main>
      <DashboardPortfolio portfolio={portfolio} />

      <TitlesProfitability/>

      <MyFixedIncome
        filteredProducts={filteredProducts}
        orderBy={orderBy}
        filter={filter}
        setOrderBy={setOrderBy}
        setFilter={setFilter}
      />

      <div className="d-flex w-100">
        <PortfolioByTypes/>
        <PortfolioByTitles/>
      </div>
    </Main>
  );
}

export default Dashboard;
