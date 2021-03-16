import React, { useEffect, useState } from 'react'
import api from '../../../services/api';
import {Info, Tag } from './styles';


export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([
    {
      name: '',
      value: ''
    },
  ])

  const getData = async () => {
    await api.get('').then((response: { data: any; }) => {
      const res = response.data.data.snapshotByPortfolio;
      
      setPortfolioData([
        {
          name: 'SALDO BRUTO',
          value: `R$ ${res.equity}`
        },
        {
          name: 'VALOR APLICADO',
          value: `R$ ${res.valueApplied}`
        },
        {
          name:'RESULTADO',
          value: `R$ ${res.equityProfit}`
        },
        {
          name:'RENTABILIDADE',
          value: `${res.percentageProfit}%`
        },
        {
          name:'CDI',
          value: `${res.indexerValue}%`
        },
        {
          name:'% SOBRE CDI',
          value: `${res.percentageOverIndexer}%`
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
          const { name, value } = data;
          return (
            <>
              <Info key={name}>
                <Tag/>
                <div className='info'> 
                  <span>{name}</span>
                  <strong>{value}</strong>
                </div>    
              </Info>
            </>
          )
        })}
    </>

  )
  

}
