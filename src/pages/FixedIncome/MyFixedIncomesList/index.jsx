import React, { useState, useEffect } from 'react';
import { parse } from 'date-fns';
import { AiOutlineSearch } from 'react-icons/ai';
import { Grid } from '@material-ui/core';

import CardInfo from '../../../components/CardInfo';
import IncomeCard from '../../../components/IncomeCard';
import IncomeInfo from '../../../components/IncomeInfo';
import Select from '../../../components/FormElements/Select';
import TextField from '../../../components/FormElements/TextField';
import productProps from '../../../constants/productProps';
import colors from '../../../constants/colors';
import {
  IncomeName,
  CardRow,
  MyFixedIncomeHeader,
  MyFixedIncomeFooter,
  Pagination,
} from './styles';

function MyFixedIncomesList(props) {
  const { snapshotByProduct } = props;
  const [ filteredProducts, setFilteredProducts ] = useState(snapshotByProduct);
  const [ listCurrentPage, setListCurrentPage ] = useState(snapshotByProduct);
  const [ orderOption, setOrderOption ] = useState();
  const [ searchValue, setSearchValue ] = useState();
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ count, setCount ] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    if (currentPage && filteredProducts?.length) {
      buildListToShow()
    }
  }, [currentPage, filteredProducts])
  
  useEffect(() => {
    if (filteredProducts) {
      const count = Math.ceil(filteredProducts?.length/recordsPerPage);
      setCount(count);
    }
  }, [filteredProducts])

  useEffect(() => {
    if (count) {
      setCurrentPage(1);
    }
  }, [count])

  useEffect(() => {
    if (orderOption && filteredProducts) {
      const ordered = orderProducts();
      setFilteredProducts(ordered);
    } else {
      setFilteredProducts(filterProducts());
    }
    buildListToShow();
  }, [orderOption])

  useEffect(() => {
    const filtered = filterProducts();
    setFilteredProducts(filtered);
  }, [searchValue, snapshotByProduct])

  function buildListToShow() {
    const firstItem = ((currentPage - 1)*(recordsPerPage));
    const lastItem = ((currentPage)*(recordsPerPage) - 1);
    const sliced = filteredProducts?.slice(firstItem, lastItem + 1);
    setListCurrentPage(sliced);
  }

  function filterProducts() {
    if (searchValue) {
      const filtered = snapshotByProduct?.filter((product) => {
        const { name, bondType } = product.fixedIncome;
        const searchByName = name?.toLowerCase().includes(searchValue.toLowerCase());
        const searchByBondType = bondType?.toLowerCase().includes(searchValue.toLowerCase());
        return searchByName || searchByBondType;
      });;
      return filtered;
    } else {
      return snapshotByProduct;
    }
  }

  function orderProducts() {
    return filteredProducts?.sort((a, b) => {
      switch (orderOption) {
        case 'name':
          return a.fixedIncome.name.toLowerCase()> b.fixedIncome.name.toLowerCase() ? 1 : -1;
      
        case 'bondType':
          return a.fixedIncome.bondType.toLowerCase()> b.fixedIncome.bondType.toLowerCase() ? 1 : -1;
      
        case 'valueApplied':
          return a.position.valueApplied - b.position.valueApplied;
      
        case 'equity':
          return a.position.equity - b.position.equity;
      
        case 'profitability':
          return a.position.profitability - b.position.profitability;
      
        case 'portfolioPercentage':
          return a.position.portfolioPercentage - b.position.portfolioPercentage;
      
        case 'indexerValue':
          return a.position.indexerValue - b.position.indexerValue;
      
        case 'percentageOverIndexer':
          return a.position.percentageOverIndexer - b.position.percentageOverIndexer;
      
        case 'date':
          return parse(a.due.date, 'dd/MM/yyyy', new Date()) - parse(b.due.date, 'dd/MM/yyyy', new Date());
      
        case 'daysUntilExpiration':
          return a.due.daysUntilExpiration - b.due.daysUntilExpiration;
      
        default:
          break;
      }
    });
  }

  const headerOptions = (
    <MyFixedIncomeHeader container spacing={2}>
      <Grid item xs={3}>
        <Select
          value={orderOption}
          onChange={setOrderOption}
          label="Ordenar por"
          options={productProps}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={searchValue}
          onChange={setSearchValue}
          icon={<AiOutlineSearch />}
        />
      </Grid>
    </MyFixedIncomeHeader>
  );

  const footerOptions = (
    <MyFixedIncomeFooter>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => setCurrentPage(page)}
      />
    </MyFixedIncomeFooter>
  );

  return (
    <CardInfo
      titleBorder
      title="Minhas Rendas Fixas"
      headerOptions={headerOptions}
      footerOptions={footerOptions}
    >
      {listCurrentPage?.map((product, index) => (
        <CardRow key={index} index={index}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <IncomeCard title="Título">
                <Grid item xs={6}>
                  <IncomeName>{product.fixedIncome.name}</IncomeName>
                </Grid>
                <IncomeInfo title="Classe" color={colors.lightPurple} value={product.fixedIncome.bondType} />
              </IncomeCard>
            </Grid>
            
            <Grid item xs={5}>
              <IncomeCard title="Minha Posição">
                <IncomeInfo title="Valor Inves." color={colors.green} value={product.position.valueApplied} />
                <IncomeInfo title="Saldo Bruto" color={colors.green} value={product.position.equity} />
                <IncomeInfo title="Rent." color={colors.green} value={product.position.profitability} sufix="%" />
                <IncomeInfo title="% da cart." color={colors.green} value={product.position.portfolioPercentage} sufix="%" />
                <IncomeInfo title={product.position.indexerLabel} color={colors.green} value={product.position.indexerValue}/>
                <IncomeInfo title={`Sobre ${product.position.indexerLabel}`} color={colors.green} value={product.position.percentageOverIndexer}/>
              </IncomeCard>
            </Grid>
            
            <Grid item xs={3}>
              <IncomeCard title="Vencimento">
                <IncomeInfo title="Data Venc." item style={{ flex: 1, justifyContent: 'center' }} color={colors.blue} value={product.due.date.replaceAll('/', '.')} />
                <IncomeInfo title="Dias até venc." item style={{ flex: 1, justifyContent: 'center' }} color={colors.blue} value={product.due.daysUntilExpiration} />
              </IncomeCard>
            </Grid>
          </Grid>
        </CardRow>
      ))}
    </CardInfo>
  );
}

export default MyFixedIncomesList;