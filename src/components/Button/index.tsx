import axios from "axios";
import { useEffect, useState } from 'react';
import { Content } from './style';
export function Button(){
    const [percentageProfit, setPercentageProfit] = useState('')
    const [loading, isLoading] = useState(true)
    const [error, setError] = useState('')
    const [equity, setEquity] = useState('');
    const [equityProfit, setEquityProfit] = useState('');
    const [valueApplied, setValueApplied] = useState('');
    const [indexerValue, setIndexerValue] = useState('');
    const [percentageOverIndexer, setPercentageOverIndexer] = useState('');

    useEffect(() => {
        axios
          .get(
            'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'
          )
          .then((response) => {
              setEquity(response.data.data.snapshotByPortfolio.equity);
              setValueApplied(response.data.data.snapshotByPortfolio.valueApplied);
              setPercentageProfit(response.data.data.snapshotByPortfolio.percentageProfit)
              setEquityProfit(response.data.data.snapshotByPortfolio.equityProfit)
              setIndexerValue(response.data.data.snapshotByPortfolio.indexerValue)
              setPercentageOverIndexer(response.data.data.snapshotByPortfolio.percentageOverIndexer)
          })
          .catch((error) => {
             setError(error.message)
             isLoading(false)
          });
      }, [setEquity]);
  
      if(loading){
          <p>Carregando</p>
      }
  
      if(error){
          return <h1>Deu erro: {error}</h1>
      }
      
    return(
        <Content>
            <button>
            <div>
                <span>Saldo Bruto</span>
                <p>R$ {equity.toLocaleString()}</p>

            </div>
            </button>
            
            <button>
            <div>
                <span>Valor Aplicado</span>
                <p>R$ {valueApplied.toLocaleString()}</p>

            </div>
            </button>

            <button>
            <div>
                <span>Resultado</span>
                <p>R$ {equityProfit.toLocaleString()}</p>

                </div>
            </button>

            <button>
            <div>
                <span>Rentabilidade</span>
                <p>{percentageProfit.toLocaleString()}%</p>

                </div>
            </button>

            <button>
            <div>
                <span>CDI</span>
                <p>{indexerValue.toLocaleString()}%</p>

                </div>
            </button>

            <button>
            <div>
                <span>% Sobre CDI</span>
                <p>{percentageOverIndexer.toLocaleString()}%</p>

                </div>
            </button>

        </Content>
    )
}