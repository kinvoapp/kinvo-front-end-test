import React, { useEffect, useState } from 'react'
import { Container, FixedIncome, Position, Due, ProductInfoContainer, PaginationMenu } from './styles';
import info from '../../../assets/svg/content/info.svg';
import api from '../../../services/api';
import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";
import localInfo from 'rc-pagination/es/locale/pt_BR';
import { useSelector } from 'react-redux';
import { SearchInterface } from '../../../store/modules/search/types';
import { State } from '../../../store';

interface ProductsType {
  due: {
    date: string;
    daysUntilExpiration: string;
  },
  fixedIncome: {
    bondType: string,
    name:string,
    portfolioProductId: string
  },
  position: {
    equity: string,
    indexerLabel: string,
    indexerValue: string,
    percentageOverIndexer: string,
    portfolioPercentage: string,
    profitability: string,
    valueApplied: string
  }
}

export default function Products() {
  const countPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useSelector<State, SearchInterface>(state => state.search);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [collection, setCollection] = useState(products.slice(0, countPerPage));
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    await api.get('').then((response: { data: any; }) => { 
      const res = response.data.data.snapshotByProduct;
      
      setProducts(res);
      setLoading(false);
    }).catch((error: any) => {
      console.log(error)
    })
  }

  const searchResults = () => {

    const filteredProducts = products.filter(filtered => 
      filtered.fixedIncome.name.toLowerCase().includes(search.toLowerCase()));
      
      
      setCollection(filteredProducts);
      setTotalPages(collection.length);
      setLoading(false);
  }

  
  const updatePage = (page : number) => {
    setCurrentPage(page);
    const to = countPerPage * page;
    const from = to - countPerPage;
    setCollection(products.slice(from, to)); 
  };

  useEffect(() => {
    

    if (search) {
      searchResults();  
      

    } else {
      getData();
      setTotalPages(products.length);
      updatePage(1);
    }

  
  }, [search, loading])


  return (
  
    <>
      { collection.map(product => {
        const {
          due, fixedIncome, position} = product;

        return (

            <Container key={fixedIncome.portfolioProductId}>
              <FixedIncome>
                <span className='title'>TÍTULO
                  <button>
                    <img src={info} alt='info'/>
                  </button>
                </span>
                <ProductInfoContainer>
                  <span className='product'>
                    {fixedIncome.name}
                  </span>
                  <div>
                    <span className='class'>CLASSE</span>
                    <span className='producttype'>{fixedIncome.bondType}</span>
                  </div>
                </ProductInfoContainer>
              </FixedIncome>
              <Position>
                <span className='title'>MINHA POSIÇÃO
                  <button>
                    <img src={info} alt='info'/>
                  </button>
                </span>
                <ProductInfoContainer>
                  <div className='data'>
                    <span className='class'>VALOR INVEST</span>
                    <span className='positiontype'>{position.valueApplied}</span>
                  </div>
                  <div>
                    <span className='class'>SALDO BRUTO</span>
                    <span className='positiontype'>{position.equity}</span>
                  </div>
                  <div>
                    <span className='class'>RENT</span>
                    <span className='positiontype'>{position.percentageOverIndexer}</span>
                  </div>
                  <div>
                    <span className='class'>% DA CART.</span>
                    <span className='positiontype'>{position.portfolioPercentage}%</span>
                  </div>
                  <div>
                    <span className='class'>CDI</span>
                    <span className='positiontype'>{position.indexerValue}</span>
                  </div>
                  <div>
                    <span className='class'>SOBRE CDI</span>
                    <span className='positiontype'>{position.profitability}</span>
                  </div>
                </ProductInfoContainer>
              </Position>
              <Due>
                <span className='title'>VENCIMENTO  
                  <button>
                    <img src={info} alt='info'/>
                  </button>
                </span>
                <ProductInfoContainer>
                  <div className='data'>
                    <span className='class'>DATA VENC.</span>
                    <span className='duetype'>{due.date}</span>
                  </div>
                  <div>
                    <span className='class'>DIAS ATÉ VENC</span>
                    <span className='duetype'>{due.daysUntilExpiration}</span>
                  </div>
                </ProductInfoContainer>
              </Due>
            </Container>
           
        )
      })}
      <PaginationMenu>
        <Pagination 
          pageSize={countPerPage}
          onChange={updatePage}
          current={currentPage}
          total={totalPages}
          locale={localInfo}
        />
      </PaginationMenu>
       
    </>
  

  ) 
       
   
}
