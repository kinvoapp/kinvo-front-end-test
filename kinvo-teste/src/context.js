import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const url = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'

  const [siteTopic, setSiteTopic] = useState('Classe de Ativos')
  const [siteSubTopic, setSiteSubTopic] = useState('Fundo Renda Fixa')
  
  const [portfolio, setPortfolio] = useState(null)
  const [products, setProducts] = useState([])

  async function fetchData (url) {
    try {
      const response = await axios.get(url)
      const data = await response.data.data
      console.log(response)
      const {equity:portSaldoBruto, valueApplied:portValorAplicado, equityProfit:portResultado, percentageProfit:portRentabilidade, indexerValue:portCDI, percentageOverIndexer:portPorcentCDI} = data.snapshotByPortfolio

      setPortfolio([
        {title:'saldo bruto', value:portSaldoBruto.toLocaleString(), type:'moeda'}, 
        {title:'valor aplicado',value:portValorAplicado, type:'moeda'}, 
        {title:'resultado', value:portResultado, type:'moeda'}, 
        {title:'rentabilidade', value:portRentabilidade, type:'porcentagem'},
        {title:'cdi', value:portCDI, type:'porcentagem'},
        {title:'% sobre cdi', value:portPorcentCDI, type:'porcentagem'}]) 
      
      data.snapshotByProduct.map((product)=>{
        const {date:dataVenc,daysUntilExpiration:diasVenc} = product.due
        const {bondType:classe, name:titulo, portfolioProductId:portfolioID} = product.fixedIncome
        const {valueApplied:prodValorAplicado, equity:prodSaldoBruto, profitability:prodRentabilidade, portfolioPercentage:porcentagemCart, indexerLabel:referencial, indexerValue:referencialValor, percentageOverIndexer:porcentagemSobreRef} = product.position

        setProducts(prod => [
          ...prod, 
          {titulo, classe, prodValorAplicado:prodValorAplicado.toLocaleString(), prodSaldoBruto:prodSaldoBruto.toLocaleString(), prodRentabilidade:prodRentabilidade.toLocaleString(), porcentagemCart:porcentagemCart.toLocaleString(), referencial, referencialValor:referencialValor.toLocaleString(), porcentagemSobreRef:porcentagemSobreRef.toLocaleString(), dataVenc:dataVenc.replaceAll("/", "."), diasVenc, portfolioID}])
      })
      
      setIsLoading(false)
    } catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData(url)
  },[])
  // useEffect(()=>{
  //   console.log(products)
  // })

  return <AppContext.Provider value={{
    siteTopic,
    setSiteTopic,
    siteSubTopic,
    setSiteSubTopic,
    portfolio,
    products,
    isLoading
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
