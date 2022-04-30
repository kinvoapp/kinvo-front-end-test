import { useEffect, useState } from "react";

function useDataFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [productListData, setProductListData] = useState("");
  const [portfolioData, setPortfolioData] = useState("");

  async function getData() {
    const response = await fetch(
      "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
    );
    const data = await response.json();
    console.log(data);

    setPortfolioData(data.data.snapshotByPortfolio);
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
