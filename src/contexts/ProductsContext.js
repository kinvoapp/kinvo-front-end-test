import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';

export const ProductsContext = createContext({});

export function ProductsProvider({children, ...rest}){
  const [portfolio, setPortfolio] = useState({});
  const [dailyEquityData, setDailyEquityData] = useState([]);
  
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [products, setProducts] = useState([]);
  
  // const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const [sliceProductsFirstPage, setSliceProductsFirstPage] = useState([]);

  useEffect(() => {
    api.get('getFixedIncomeClassData')
      .then(response => {
        setPortfolio(response.data.data.snapshotByPortfolio);
        setDailyEquityData(response.data.data.dailyEquityByPortfolioChartData);
        setProducts(response.data.data.snapshotByProduct);
        setSliceProductsFirstPage(sliceProducts(response.data.data.snapshotByProduct));
      })
      .catch(function (error) {
        console.log(error);
      })
      setPageCount(Math.ceil(products.length / 5));
      console.log(sliceProductsFirstPage);
  }, []);

  // useEffect(()=>{
  //   console.log('Ofset alt Products: ', products);
  //   console.log('offset: ', offset);
  //   setSliceProductsFirstPage(sliceProducts(products));
  // },[offset]);

  useEffect(() => {
    if(search === '') {
      // setProducts(originalProducts);
      sortProduct(select);
    }
    // else 
      // setProducts(searchProducts);
    // setSliceProductsFirstPage(sliceProducts);  
  }, [search]);

  // function handlePageClick(e){
  //   console.log('Entrou no page click')
  //   const selectedPage = e.selected;
  //   setCurrentPage(selectedPage);
  //   setOffset(selectedPage * 5);
  // };

  function sliceProducts(products){
    return products.slice(0, 5);
  }

  // function handleSearch(e){
  //   const inputValue = String(e.target.value).toLowerCase();
  //   setSearch(inputValue);
  // }

  // function handleSelect(e){
  //   const selectValue = e.target.value;
  //   setSelect(selectValue);
  //   sortProduct(selectValue);
  // }

  // function searchProducts(){
  //   return sliceProductsFirstPage.filter( product => {
  //     const name = String(product.fixedIncome.name).toLowerCase();
  //     const type = String(product.fixedIncome.bondType).toLowerCase();
  //     return name.includes(search) || type.includes(search);
  //   })
  // }

  function orderByName(a, b){
    return a.fixedIncome.name > b.fixedIncome.name ? 1 : a.fixedIncome.name < b.fixedIncome.name ? -1 : 0
  }

  function orderByType(a, b){
    return a.fixedIncome.bondType > b.fixedIncome.bondType ? 1 : a.fixedIncome.bondType < b.fixedIncome.bondType ? -1 : 0
  }

  function orderByLowerProfitability(a, b){
    return a.position.profitability - b.position.profitability;
  }

  function orderByGreaterProfitability(a, b){
    return b.position.profitability - a.position.profitability;
  }

  function sortProduct(select){
    console.log('Entrou no ordenar por ', select)
    switch (select){
      case 'name' : 
        return products.sort(orderByName);
      case 'type':
        return products.sort(orderByType);
      case 'lowerprofitability':
        return products.sort(orderByLowerProfitability)
      case 'greaterprofitability':
        return products.sort(orderByGreaterProfitability)
      default:
        // return originalProducts;
        return products;
    }

  }

  return(
    <ProductsContext.Provider value={{
      portfolio,
      products,
      search,
      select,
      sliceProductsFirstPage,
      pageCount, setProducts
    }}>
      {children}
    </ProductsContext.Provider>
  );
        
}

  

