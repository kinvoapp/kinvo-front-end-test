import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';

import Pagination from '../../Pagination';

import InformationIcon from '../../../assets/renda-fixa/information.svg';
import SearchIcon from '../../../assets/renda-fixa/search-lupa.svg';

import api from '../../../services/api';
import utils from '../../../utils/utils';

import {
  Container,
  Header,
  SearchContainer,
  InputSearchContainer,
  InputSearchIcon,
  SearchInput,
  Title,
  Content,
  CardTitle,
  CardPosition,
  CardDueDate,
  CardHeader,
  CardSpan,
  InformationIconImg,
  CardTitleDescription,
  CardFlexContent,
  CardTitleSpan,
  CardPositionSpan,
  CardDueDateSpan,
  CardFlexContentColumn,
  Footer,
} from './styles';

function ListagemRendaFixa() {
  const [fixedIncomeProducts, setFixedIncomeProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    api.get('/getFixedIncomeClassData').then(response => {
      const { snapshotByProduct } = response.data.data;
      setFixedIncomeProducts([...snapshotByProduct]);
      setFilteredProducts([...snapshotByProduct]);
    });
  }, []);

  useEffect(() => {
    let sortedProducts = [];
    const option = sortOption ? sortOption.value : false;

    if (option === 'Classe') sortedProducts = utils().sortList(fixedIncomeProducts, 'fixedIncome', 'bondType');
    if (option === 'Titulo') sortedProducts = utils().sortList(fixedIncomeProducts, 'fixedIncome', 'name');
    if (option === 'Valor Investido') sortedProducts = utils().sortList(fixedIncomeProducts, 'position', 'valueApplied');
    if (option === 'Saldo Bruto') sortedProducts = utils().sortList(fixedIncomeProducts, 'position', 'equity');
    if (option === 'Rentabilidade') sortedProducts = utils().sortList(fixedIncomeProducts, 'position', 'profitability');
    if (option === 'Porcentagem Da Carteira') sortedProducts = utils().sortList(fixedIncomeProducts, 'position', 'portfolioPercentage');
    if (option === '% Sobre CDI') sortedProducts = utils().sortList(fixedIncomeProducts, 'position', 'percentageOverIndexer');
    if (option === 'CDI (outros)') sortedProducts = utils().sortList(fixedIncomeProducts, 'position', 'indexerValue');
    if (option === 'Data De Vencimento') sortedProducts = utils().sortListByDate(fixedIncomeProducts, 'due', 'date');
    if (option === 'Dias Até Vencimento') sortedProducts = utils().sortList(fixedIncomeProducts, 'due', 'daysUntilExpiration');

    setFilteredProducts(sortedProducts);
  }, [sortOption]);

  useEffect(() => {
    let sortedProducts = [];
    sortedProducts = utils().sortBySearch(searchInput, fixedIncomeProducts, 'fixedIncome', 'name');

    setFilteredProducts(sortedProducts);
  }, [searchInput]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const goToNextPage = totalPages => {
    const newPage = currentPage + 1;
    if (newPage <= totalPages) setCurrentPage(newPage);
  };
  const goToPreviusPage = () => {
    const newPage = currentPage - 1;
    if (newPage > 0) setCurrentPage(newPage);
  };

  const sortDropdownOptions = [
    'Classe',
    'Titulo',
    'Valor Investido',
    'Saldo Bruto',
    'Rentabilidade',
    'Porcentagem Da Carteira',
    'CDI (outros)',
    '% Sobre CDI',
    'Data De Vencimento',
    'Dias Até Vencimento',
  ];

  return (
    <Container>
      <Header>
        <Title>Minhas Rendas Fixas</Title>
        <SearchContainer>
          <Dropdown
            controlClassName="dropdown-style"
            className="dropdown-style"
            placeholderClassName="Ordenar Por"
            options={sortDropdownOptions}
            onChange={value => setSortOption(value)}
            placeholder="Ordenar Por"
          />
          <InputSearchContainer>
            <InputSearchIcon src={SearchIcon} alt="Icone Lupa" />
            <SearchInput type="text" onChange={value => setSearchInput(value.target.value)} />
          </InputSearchContainer>
        </SearchContainer>
      </Header>
      {currentProducts &&
        currentProducts.map(({ fixedIncome, position, due }) => (
          <Content key={fixedIncome.portfolioProductId}>
            <CardTitle>
              <CardHeader>
                <CardSpan>TITULO</CardSpan>
                <InformationIconImg src={InformationIcon} alt="Icone Informações" />
              </CardHeader>
              <CardFlexContent>
                <CardTitleDescription>{fixedIncome.name}</CardTitleDescription>
                <CardFlexContentColumn>
                  <CardSpan>CLASSE</CardSpan>
                  <CardTitleSpan>{fixedIncome.bondType}</CardTitleSpan>
                </CardFlexContentColumn>
              </CardFlexContent>
            </CardTitle>
            <CardPosition>
              <CardHeader>
                <CardSpan>MINHA POSIÇÃO</CardSpan>
                <InformationIconImg src={InformationIcon} alt="Icone Informações" />
              </CardHeader>
              <CardFlexContent>
                <CardFlexContentColumn>
                  <CardSpan>VALOR INVES.</CardSpan>
                  <CardPositionSpan>{utils().convertReal(position.valueApplied)}</CardPositionSpan>
                </CardFlexContentColumn>
                <CardFlexContentColumn>
                  <CardSpan>SALDO BRUTO</CardSpan>
                  <CardPositionSpan>{utils().convertReal(position.equity)}</CardPositionSpan>
                </CardFlexContentColumn>
                <CardFlexContentColumn>
                  <CardSpan>RENT.</CardSpan>
                  <CardPositionSpan>{utils().convertReal(position.profitability)}%</CardPositionSpan>
                </CardFlexContentColumn>
                <CardFlexContentColumn>
                  <CardSpan>% DA CART.</CardSpan>
                  <CardPositionSpan>{utils().convertReal(position.portfolioPercentage)}%</CardPositionSpan>
                </CardFlexContentColumn>
                <CardFlexContentColumn>
                  <CardSpan>{position.indexerLabel}</CardSpan>
                  <CardPositionSpan>{utils().convertReal(position.indexerValue)}</CardPositionSpan>
                </CardFlexContentColumn>
                <CardFlexContentColumn>
                  <CardSpan>SOBRE CDI</CardSpan>
                  <CardPositionSpan>{utils().convertReal(position.percentageOverIndexer)}%</CardPositionSpan>
                </CardFlexContentColumn>
              </CardFlexContent>
            </CardPosition>
            <CardDueDate>
              <CardHeader>
                <CardSpan>VENCIMENTO</CardSpan>
                <InformationIconImg src={InformationIcon} alt="Icone Informações" />
              </CardHeader>
              <CardFlexContent>
                <CardFlexContentColumn>
                  <CardSpan>DATA VENC.</CardSpan>
                  <CardDueDateSpan>{due.date}</CardDueDateSpan>
                </CardFlexContentColumn>
                <CardFlexContentColumn>
                  <CardSpan>DIAS ATÉ VENC.</CardSpan>
                  <CardDueDateSpan>{due.daysUntilExpiration}</CardDueDateSpan>
                </CardFlexContentColumn>
              </CardFlexContent>
            </CardDueDate>
          </Content>
        ))}
      <Footer>
        <Pagination
          productPerPage={productsPerPage}
          totalProducts={fixedIncomeProducts.length}
          paginate={paginate}
          goToNextPage={goToNextPage}
          goToPreviusPage={goToPreviusPage}
        />
      </Footer>
    </Container>
  );
}

export default ListagemRendaFixa;
