import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import api from '../services/api';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {Card, CardPieChart, InputContainer,CardTitle, ChartsContainer, 
  CardHeader, Input, InputGroups, Select} from '../components/Card';
import Porfolio from '../components/Portfolio';
import Products from '../components/Products';
import ReactPaginate from 'react-paginate';
import Portfolio from '../components/Portfolio';
import MyChart from '../components/MyChart';
import PieChart from '../components/PieChart';


const Page = styled.div`
  font-family: 'Montserrat';
  min-width: fit-content;
  height: 100%;
  background: var(--background-page);
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
const Container = styled.div`
  margin-left: 222px;
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
`;
const TitlePrimary = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
`;
const PaginateContainer = styled.div`
  display: flex;
  align-content: center;
`;



function Dashboard(){
  const [portfolio, setPortfolio] = useState({});
  const [dailyEquityData, setDailyEquityData] = useState([]);

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  
  const [offset, setOffset] = useState(0);
  
  
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  
  async function getAllData(){
    const response = await api.get('getFixedIncomeClassData');
    
    setPortfolio(response.data.data.snapshotByPortfolio);
    setDailyEquityData(response.data.data.dailyEquityByPortfolioChartData);
    setProducts(response.data.data.snapshotByProduct.sort(orderByName));
    setCurrentProducts(productsForCurrentPage);
    setPageCount(Math.ceil(response.data.data.snapshotByProduct.length / 5));
    setOriginalProducts(response.data.data.snapshotByProduct);
    
  }

  useEffect(() => {
    getAllData();    
  }, []);

  useEffect(()=>{ 
    setCurrentProducts(productsForCurrentPage);
    console.log('new cp: ', currentProducts); 
  },[products, offset]);
  
  useEffect(() => {
    setProducts(searchProducts);  
  }, [search]);

  useEffect(() => {
    setProducts(sortProduct);   
    setCurrentProducts(productsForCurrentPage);
  }, [select]);
  
    
  // function handlePageClick(e){
  //   setCurrentPage(e.selected);
  //   setOffset(e.selected * 5);
  // };

  function productsForCurrentPage(){
    return products.slice(offset, offset + 5);
  }

  function handleSearch(e){
    const inputValue = String(e.target.value).toLowerCase();
    setSearch(inputValue);
  }

  function searchProducts(){
    if(search === ''){
      setSelect('');
      return originalProducts;
    }

    return products.filter( product => {
      const name = String(product.fixedIncome.name).toLowerCase();
      const type = String(product.fixedIncome.bondType).toLowerCase();
      return name.includes(search) || type.includes(search);
    });
  }

  function orderByName(a, b){
    return a.fixedIncome.name > b.fixedIncome.name ? 1 : a.fixedIncome.name < b.fixedIncome.name ? -1 : 0
  }

  function orderByType(a, b){
    return a.fixedIncome.bondType > b.fixedIncome.bondType ? 1 
    : a.fixedIncome.bondType < b.fixedIncome.bondType ? -1 : 0
  }

  function orderByLowerProfitability(a, b){
    return a.position.profitability - b.position.profitability;
  }

  function orderByGreaterProfitability(a, b){
    return b.position.profitability - a.position.profitability;
  }

  function sortProduct(){
    switch (select){
      case 'name' : 
        return products.sort(orderByName);
      case 'type':
        return products.sort(orderByType);
      case 'lowerprofitability':
        return products.sort(orderByLowerProfitability);
      case 'greaterprofitability':
        return products.sort(orderByGreaterProfitability);
      default:
        return originalProducts.sort(orderByName);
    }      
  }

  const filterTypes = products.map(p => p.fixedIncome.bondType); 
  const filterTitles = products.map(p => p.fixedIncome.name); 
  
  return(
    <Page>
      <Header />
      <Main>
        <Sidebar />
        <Container>
          <TitlePrimary>Renda Fixa</TitlePrimary> 
          <Portfolio portfolio={portfolio} />
          <Card >
            <CardTitle>Rentabilidade de Títulos</CardTitle>
            <MyChart dailyData={dailyEquityData} />
          </Card> 
          <Card >
            <CardHeader>
              <CardTitle>Minhas rendas fixas</CardTitle>
                <InputGroups>
                  <InputContainer>
                    <Select 
                      name="order" 
                      value={select}
                      onChange={e => setSelect(e.target.value)}
                    >
                      <option value=''>Ordernar por</option>
                      <option value="name">Titulo</option>
                      <option value="type">Tipo</option>
                      <option value="lowerprofitability">Menor Rentabilidade</option>
                      <option value="greaterprofitability">Maior Rentabilidade</option>
                    </Select>
                  </InputContainer>
                  <InputContainer>
                  <span className="material-icons">
                    search
                  </span>
                  <Input 
                    placeholder="Pesquise por titulo ou classe"  
                    type="text"
                    value={search}
                    onChange={handleSearch} 
                  />
                </InputContainer>
              </InputGroups>
            </CardHeader>
            <Products products={currentProducts} />
            <PaginateContainer>
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              breakLabel={<span className="gap">...</span>}
              pageCount={pageCount}
              onPageChange={e => {
                setCurrentPage(e.selected);
                setOffset(e.selected * 5);
              }}
              forcePage={currentPage}
              containerClassName={"pagination"}
              previousLinkClassName={"previous_page"}
              nextLinkClassName={"next_page"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
            </PaginateContainer>
          </Card>
          <ChartsContainer>
            
            <CardPieChart>
              <CardHeader>
                <CardTitle>Divisão de Carteiras por tipos</CardTitle>
              </CardHeader>
              <PieChart types={filterTypes} />
            </CardPieChart>
            
            <CardPieChart>
              <CardHeader>
                <CardTitle>Divisão de Carteiras por títulos</CardTitle>
              </CardHeader>
              <PieChart types={filterTitles} />
            </CardPieChart>
          </ChartsContainer>
          
        </Container>
      </Main>
    </Page>
  );
}
export default Dashboard;