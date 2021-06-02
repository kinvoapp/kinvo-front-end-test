import Cards from '@components/cards/Cards';
import React, { useEffect, useState } from 'react';
import api, { to,  } from '@services/api';
import SvgIcon from '@components/svgIcon/SvgIcon';
import CardFolderType from '@components/cardFolderType/CardFolderType';
import {
  Container,
  SnapshotByPortfolio,
  SnapshotByProduct,
  HeaderSnapshot,
  Title,
  SearchContainer,
  OrderBy,
  SearchInput,
  SnapshotContent,
  SnapshotRow,
  NavigationConteiner,
  ChartContainer
} from './FixedIncomeFund.styles';
import { paginate, calculateHowManyPagesWithItemsPerPage } from '@utils/paginateHelper';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useFetch } from '../../../services/useFetch/useFetch';
const Snapshots = [
  { title: 'saldo bruto', slugname: 'equity', percentage: false },
  { title: 'valor aplicado', slugname: 'valueApplied', percentage: false },
  { title: 'resultado', slugname: 'equityProfit', percentage: false },
  { title: 'rentabilidade', slugname: '', percentage: true },
  { title: 'cdi', slugname: '', percentage: true },
  { title: '% sobre cdi', slugname: '', percentage: true },
];

const ProductCategory = [
  { title: 'titulo', slugname: 'fixedIncome' },
  { title: 'minha posição', slugname: 'position' },
  { title: 'vencimento', slugname: 'due' },
];

interface DataResponse {
  snapshotByPortfolio: { [key: string]: string };
  snapshotByProduct: Array<{}>;
  dailyEquityByPortfolioChartData: Array<{[key: string]: any}>
}

const FixedIncomeFund = () => {
  // const [data, setData] = useState<DataResponse>();
  const [pageContent, setPageContent] = useState<Array<{}>>();
  const [actualPage, setActualPage] = useState<Array<{}>>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [sortedArray, setSortedArray] = useState<Array<any>>([]);
  const { data, doFetch: getFixed, isFetching: loadingData } = useFetch('getFixedIncomeClassData', 'get', { onSuccess: (resp) => {
    const { data } = resp;
    console.log(data);
    setPageContent(data.snapshotByProduct);
    const initalItemsPage = paginate({Items: data.snapshotByProduct, itemsPerPage: 5, pageNumber: currentPage});
    const totalPage = calculateHowManyPagesWithItemsPerPage({ Items: data.snapshotByProduct, itemsPerPage: 5 });
    setTotalPages(totalPage);
    setActualPage(initalItemsPage);
    handleSortCharArray(data.dailyEquityByPortfolioChartData);
  } });

  const handleSortCharArray = async (arr: Array<any>) => {
    const groupProductName = arr.reduce((acc, cur)=>{
      if(acc[cur.productName]){
        acc[cur.productName].data = [...acc[cur.productName].data, cur.correctedQuota]
        return acc;
      }
      acc[cur.productName] = {
        name: cur.productName,
        data: [cur.correctedQuota],
      }
      return acc;
    },{});

    const sorted = Object.values(groupProductName);
    setSortedArray(sorted);
  }

  useEffect(() => {
    getFixed();
  }, []);

  useEffect(() => {
    if (data?.data) {
      const initalItemsPage = pageContent && paginate({Items: pageContent, itemsPerPage: 5, pageNumber: currentPage});
      setActualPage(initalItemsPage)
    }
  }, [currentPage]);

  const Buttons: JSX.Element[] = [];

  for (let i = 1; i <= totalPages; i++) {
    Buttons.push(<button type="button" onClick={() => setCurrentPage(i)} disabled={currentPage === i}>{i}</button>)
  }

  const handleFilter = async (query: string) => {
    const filterOptions =  pageContent && pageContent.filter((content: any) => content.fixedIncome.name.toLowerCase().includes(query));
    setActualPage(filterOptions);
  }

  const options = {
    title: {
      text: '',
    },
    chart: {
      type: 'areaspline'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      min:0.5,
      max:10.5,
      tickInterval:1,
      maxPadding:0,
      endOnTick:false,
      startOnTick:false
    },
    
    yAxis: {
      allowDecimals: false,
      title: {
          text: ''
      },

    },
    plotOptions: {
      areaspline: {
        line: {
          enable: false,
        },
      }
    },
    series: sortedArray,
  }

  return (
    <Container>
      <h2>Renda Fixa</h2>
      {data?.data && 
        <SnapshotByPortfolio>
          {Object.keys(data?.data?.snapshotByPortfolio).map((snap, index) => (
            <Cards title={Snapshots[index]?.title} value={data?.data?.snapshotByPortfolio[snap]} type={Snapshots[index]?.percentage ? 'percente' : 'currency'} />
          ))}
        </SnapshotByPortfolio>
      }
      <ChartContainer>
        <p>Rentabilidade dos Títulos</p>
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </ChartContainer>
      <SnapshotByProduct>
        <HeaderSnapshot>
          <Title>Minhas Rendas Fixas</Title>
          <SearchContainer>
            {/* <OrderBy /> */}
            <SearchInput>
              <SvgIcon src="./public/assets/svg/magnifying-glass-icon.svg" />
              <input onChange={event => handleFilter(event.target.value)} name="query" />
            </SearchInput>
          </SearchContainer>
        </HeaderSnapshot>
       
        <SnapshotContent>
          {actualPage?.map(product => (
            <SnapshotRow>
              {ProductCategory.map(object => (
                <CardFolderType title={object.title} data={product[object.slugname]} />
              ))}
            </SnapshotRow>
          ))}
          <NavigationConteiner>
            <button type="button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage - 1 === 0}>voltar</button>
              {Buttons}
            <button type="button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>proximo</button>
          </NavigationConteiner>
        </SnapshotContent>
      </SnapshotByProduct>
    </Container>
  );
};

export default FixedIncomeFund;
