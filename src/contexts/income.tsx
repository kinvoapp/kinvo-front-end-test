import { AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface IncomeProviderProps {
  children: ReactNode;
}

interface IncomeApiResponse {
  success: string;
  data: dataType;
  error: string | null;
}

export type dataType = {
  snapshotByPortfolio: {
    equity: string;
    valueApplied: string;
    equityProfit: string;
    percentageProfit: string;
    indexerValue: string;
    percentageOverIndexer: string;
  }
  dailyEquityByPortfolioChartData: [];
  snapshotByProduct: snapshotByProduct[]
}

export type snapshotByProduct = {
  due: {
    date: string;
    daysUntilExpiration: number
  }
  fixedIncome: {
    bondType: string;
    name: string;
  }
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  }
}

interface IncomeContextData {
  loadingData: boolean;
  requestError: boolean;
  fullData: dataType;
  orderMyFixedIncomesBy: (type: string) => void
  filterMyIncomesBy: (query: string) => void
  filteredSearch: snapshotByProduct[]
}

export const IncomeContext = createContext({} as IncomeContextData);

export const IncomeProvider = ({ children }: IncomeProviderProps) => {

  const [loadingData, setLoadingData] = useState(true);
  const [requestError, setRequestError] = useState(false);
  const [fullData, setData] = useState({} as dataType);
  const [filteredSearch, setFilteredSearch] = useState({} as snapshotByProduct[]);

  useEffect(() => {
    async function getData() {
      try {
        setLoadingData(true);
        const { data }: AxiosResponse<IncomeApiResponse> = await api.get('/');
        setData(data.data);
        setFilteredSearch(data.data.snapshotByProduct)
      } catch (error) {
        setRequestError(true);
      } finally {
        setLoadingData(false);
      }
    }
    getData();
  }, [])

  function orderMyFixedIncomesBy(type: string) {
    if (type === 'rent') orderedByRentability();
    if (type === 'totalApplied') orderedByTotalApplied();
  }

  function orderedByRentability() {
    const newState = [...fullData.snapshotByProduct];
    newState.sort((a, b) => Number(b.position.profitability) - Number(a.position.profitability))
    setData({ ...fullData, snapshotByProduct: newState })
  }
  function orderedByTotalApplied() {
    const newState = [...fullData.snapshotByProduct];
    newState.sort((a, b) => Number(b.position.valueApplied) - Number(a.position.valueApplied))
    setData({ ...fullData, snapshotByProduct: newState })
  }

  function filterMyIncomesBy(query: string) {
    const newState = [...fullData.snapshotByProduct];
    if(query === "") return setFilteredSearch(newState);
    const filtered = newState.filter((item) =>
      item.fixedIncome.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
    setFilteredSearch(filtered)
  }

  return (
    <IncomeContext.Provider value={{
      fullData,
      loadingData,
      requestError,
      orderMyFixedIncomesBy,
      filterMyIncomesBy,
      filteredSearch,
    }}>
      {children}
    </IncomeContext.Provider>
  )
}