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

type dataType = {
  snapshotByPortfolio: {
    equity: string;
    valueApplied: string;
    equityProfit: string;
    percentageProfit: string;
    indexerValue: string;
    percentageOverIndexer: string;
  }
  dailyEquityByPortfolioChartData: []
  snapshotByProduct: []
}

interface IncomeContextData {
  loadingData: boolean;
  requestError: boolean;
  fullData: dataType;
}


export const IncomeContext = createContext({} as IncomeContextData);

export const IncomeProvider = ({ children }: IncomeProviderProps) => {

  const [loadingData, setLoadingData] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [fullData, setData] = useState({} as dataType);

  useEffect(() => {
    async function getData() {
      try {
        setLoadingData(true);
        const { data }: AxiosResponse<IncomeApiResponse> = await api.get('/a');
        setData(data.data);
      } catch (error) {
        setRequestError(true);
      } finally {
        setLoadingData(false);
      }
    }
    getData();
  }, [])

  return (
    <IncomeContext.Provider value={{
      fullData,
      loadingData,
      requestError
    }}>
      {children}
    </IncomeContext.Provider>
  )
}