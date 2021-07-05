import { createContext, ReactNode, useEffect, useState } from 'react'
import api from './services/api';

//TIPAGEM DOS DADOS DA API
interface APIDataProps {
    snapshotByProduct: [
      {
        fixedIncome: {
          bondType: string,
          name: string,
        },
        position: {
          equity: number,
          indexerLabel: string,
          indexerValue: number,
          percentageOverIndexer: number,
          portfolioPercentage: number,
          profitability: number,
          valueApplied: number,
        },
        due: {
          date: string,
          daysUntilExpiration: number,
        }
      }
    ],
    snapshotByPortfolio: {
        equity: number,
        valueApplied: number,
        equityProfit: number,
        percentageProfit: number,
        indexerValue: number,
        percentageOverIndexer: number,
    }
  }

interface AtivosProviderProps {
    children: ReactNode;
}

//CRIAÇÃO DO CONTEXTO
export const AtivosContext = createContext<APIDataProps>({} as APIDataProps);


//CRIAÇÃO DO PROVIDER QUE PASSARÁ TODO O CONTEXTO OS COMPONENTES FILHOS
export function AtivosProvider({ children }: AtivosProviderProps) {
    const [ativos, setAtivos] = useState<APIDataProps>({} as APIDataProps);
     
        useEffect(() => {
            api.get('/getFixedIncomeClassData')
            .then(response => setAtivos(response.data.data))
        }, []); 

    return(
        <AtivosContext.Provider value={ativos}>
            { children }
        </AtivosContext.Provider>
    )
}