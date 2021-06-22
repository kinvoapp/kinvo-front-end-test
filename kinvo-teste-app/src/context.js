import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [erroConnection, setErroConnection] = useState(false)

  const [siteTopic, setSiteTopic] = useState('Classe de Ativos')
  const [siteSubTopic, setSiteSubTopic] = useState('Fundo Renda Fixa')
  
  const [portfolio, setPortfolio] = useState(null)
  const [products, setProducts] = useState([])

  const [sort, setSort] = useState('default')

  const [grafTitulos, setGrafTitulos] = useState([])
  const [grafTipos, setGrafTipos] = useState([])
  const [grafTiposRef, setGrafTiposRef] = useState([])
  

   // Chamando API para diferentes seções
   useEffect(()=>{
    setIsLoading(true)
    let url = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/'
    if(siteSubTopic === 'Fundo Renda Fixa'){
      url = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData' 
    }
    fetchData(url)
  },[siteSubTopic])

  async function fetchData (url) {
    try {
      const response = await axios.get(url)
      const data = await response.data.data
      
      const {equity:portSaldoBruto, valueApplied:portValorAplicado, equityProfit:portResultado, percentageProfit:portRentabilidade, indexerValue:portCDI, percentageOverIndexer:portPorcentCDI} = data.snapshotByPortfolio

      // zerando
      setProducts([])
      setGrafTitulos([])
      setGrafTipos([])
      setGrafTiposRef([])

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
        
          //gráficos 
          setGrafTitulos(graf => [
          ...graf,
          {label:titulo,value:parseInt(prodSaldoBruto)}
        ])
          setGrafTipos(graf2 => [
            ...graf2,
            {label:classe, value:parseInt(prodSaldoBruto)}
          ])
      })
      setIsLoading(false)
      setErroConnection(false)
      
    } catch (err){
      setIsLoading(false)
      setErroConnection(true)
      console.log(err)
    }
  }

  // Classificando os Produtos
  const updateSort = (e) => {
    const value = e.target.value
    setSort(value)
  }
  useEffect(()=>{
    let tempProducts =  [...products]
    if(sort === 'classe'){
      tempProducts = tempProducts.sort((a,b)=>{
        return a.classe.localeCompare(b.classe)
      })
    }
    if(sort === 'titulo'){
      tempProducts = tempProducts.sort((a,b)=>{
        return a.titulo.localeCompare(b.titulo)
      })
    }
    if(sort === 'prodSaldoBruto'){
      tempProducts = tempProducts.sort((a,b)=>parseFloat(b.prodSaldoBruto)-parseFloat(a.prodSaldoBruto))
    }
    if(sort === 'prodValorAplicado'){
      tempProducts = tempProducts.sort((a,b)=>parseFloat(b.prodValorAplicado)-parseFloat(a.prodValorAplicado))
    }
    if(sort === 'diasVenc'){
      tempProducts = tempProducts.sort((a,b)=>a.diasVenc-b.diasVenc)
    }
    setProducts(tempProducts)
  },[sort])


  // Filtrando gráfico de Tipos
  useEffect(()=>{
    const filtradoPos = grafTipos.filter((graf)=> graf.label === 'Renda Fixa Pós');
    const somadoPos = filtradoPos.reduce((ac, x) => ac + x.value, 0)
    const filtradoPre = grafTipos.filter((graf)=> graf.label === 'Renda Fixa Pré');
    const somadoPre = filtradoPre.reduce((ac, x) => ac + x.value, 0)
    const filtradoTd = grafTipos.filter((graf)=> graf.label === 'Tesouro Direto');
    const somadoTd = filtradoTd.reduce((ac, x) => ac + x.value, 0)
    const newGrafTipo = [{label:'Renda Fixa Pós', value:somadoPos},{label:'Renda Fixa Pré', value:somadoPre},{label:'Tesouro Direto', value:somadoTd},]
    setGrafTiposRef(newGrafTipo)
  },[grafTipos])
  
  return <AppContext.Provider value={{
    siteTopic,
    setSiteTopic,
    siteSubTopic,
    setSiteSubTopic,
    portfolio,
    products,
    isLoading,
    updateSort,
    sort,
    erroConnection,
    grafTitulos,
    grafTipos,
    grafTiposRef
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
