import React, { useState, useEffect } from "react";

import Product from '../Product'

import { FaSearch } from 'react-icons/fa'
import ReactPaginate from "react-paginate";

import { MyFixedIncomeContainer, TitleWRapper, Title, Select, Input, DisplayItems } from './styles'

function MyFixedIncome({filteredProducts, orderBy, filter, setOrderBy, setFilter}) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts, orderBy]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <MyFixedIncomeContainer>
        <TitleWRapper>
          <Title>Minhas Rendas Fixas</Title>

          <div className="d-flex">
            <Select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="" disabled hidden>
                Ordernar por
              </option>
              <option value="valueApplied">Valor Investido</option>
              <option value="equity">Saldo Bruto</option>
              <option value="profitability">Rentabilidade</option>
              <option value="portfolioPercentage">% da Carteira</option>
            </Select>
            <div style={{ position: "relative" }}>
              <Input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ paddingLeft: "30px" }}
                type="text"
              />
              <FaSearch color="#9DA5AC"
                style={{ position: "absolute", left: "9px", top: "25%" }}
              />
            </div>
          </div>
        </TitleWRapper>

        <DisplayItems>
          {currentItems &&
            currentItems.map((product, index) => (
              <Product key={index} product={product}/>
            ))
          }
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactPaginate
              containerClassName="containerPagination"
              //pageClassName="Teste"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              nextLabel=">"
              previousLabel="<"
            />
          </div>
        </DisplayItems>
    </MyFixedIncomeContainer>
  );
}

export default MyFixedIncome;
