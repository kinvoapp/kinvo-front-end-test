import React, { useEffect, useState } from 'react'
import api from '../../../services/api';
import {Info, Tag } from './styles';


interface PortfolioType {
  
    name: string,
    value: number,
    prefix: string,
    suffix: string
  
}

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState<PortfolioType[]>([]);

  const getData = async () => {
    await api.get('').then((response: { data: any; }) => {
      const res = response.data.data.snapshotByPortfolio;
      
      setPortfolioData([
        {
          name: 'SALDO BRUTO',
          value: res.equity,
          prefix: 'R$',
          suffix: ''
        },
        {
          name: 'VALOR APLICADO',
          value: res.valueApplied,
          prefix: 'R$',
          suffix: ''
        },
        {
          name:'RESULTADO',
          value: res.equityProfit,
          prefix: 'R$',
          suffix: ''
        },
        {
          name:'RENTABILIDADE',
          value: res.percentageProfit,
          prefix: '',
          suffix: '%'
        },
        {
          name:'CDI',
          value: res.indexerValue,
          prefix: '',
          suffix: '%'
        },
        {
          name:'% SOBRE CDI',
          value: res.percentageOverIndexer,
          prefix: '',
          suffix: '%'
        }
      ])
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
       {portfolioData.map((data) => {
          const { name, value, prefix, suffix } = data;
          return (
            <>
              <Info key={name}>
                <Tag/>
                <div className='info'> 
                  <span>{name}</span>
                  <strong>{prefix} {value.toLocaleString()}{suffix}</strong>
                </div>    
              </Info>
            </>
          )
        })}
    </>

  )
  

}
