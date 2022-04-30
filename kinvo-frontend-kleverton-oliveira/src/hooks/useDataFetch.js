import { useEffect, useState } from "react";

function useDataFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [productListData, setProductListData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
    );
    const data = await response.json();

    console.log(data);

    // Separating content to use at Portfolio Component in Main Content Area
    const {
      equity,
      equityProfit,
      indexerValue,
      percentageOverIndexer,
      percentageProfit,
      valueApplied,
    } = data.data.snapshotByPortfolio;

    const portfolio = [
      {
        title: "SALDO BRUTO",
        value: `R$ ${Number(equity).toLocaleString()}0`,
      },
      {
        title: "VALOR APLICADO",
        value: `R$ ${Number(valueApplied).toLocaleString()}`,
      },
      {
        title: "RESULTADO",
        value: `R$ ${Number(equityProfit).toLocaleString()}`,
      },
      {
        title: "RENTABILIDADE",
        value: `${percentageProfit}%`,
      },
      {
        title: "CDI",
        value: `${indexerValue}%`,
      },
      {
        title: "% SOBRE CDI",
        value: `${percentageOverIndexer}%`,
      },
    ];

    setPortfolioData(portfolio);

    setProductListData(data.data.snapshotByProduct);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    isLoading,
    portfolioData,
    productListData,
  };
}

export default useDataFetch;
