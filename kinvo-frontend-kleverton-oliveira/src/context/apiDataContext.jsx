import React, { useContext, useEffect, useState } from "react";

const ApiDataContext = React.createContext({});

export const ApiDataContextProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [productListData, setProductListData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
    );
    const data = await response.json();

    setPortfolioData(data.data.snapshotByPortfolio);
    setProductListData(data.data.snapshotByProduct);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiDataContext.Provider
      value={{
        isLoading,
        productListData,
        portfolioData,
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiDataContext = () => useContext(ApiDataContext);
