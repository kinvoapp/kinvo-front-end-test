//--------------------------------------------------------------------< hooks >
import { useEffect, useState } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
import { getPortfolio } from "../services/api";
import { Portfolio } from "../types/Portfolio";
interface IData {
  portfolio: Portfolio;
  error: boolean;
  loaded: boolean;
}
interface IProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
export const PortfolioContext = createContext({} as IData);
//====================================================[ < PortfolioProvider > ]
export function PortfolioProvider({ children }: IProps) {
  //-------------------------------------------------------------< properties >
  const [portfolio, setPortfolio] = useState<Portfolio>({} as Portfolio);

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    (async () => {
      getPortfolio()
        .then((_portfolio) => setPortfolio(_portfolio))
        .catch(() => setError(true))
        .finally(() => setLoaded(true));
    })();
  }, []);
  //-----------------------------------------------------------------< return >
  return (
    <PortfolioContext.Provider value={{ portfolio, error, loaded }}>
      {children}
    </PortfolioContext.Provider>
  );
}
