import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";

import FormsFixedIncome from "../FormsFixedIncome";
import MyFixedIncomeCards from "../MyFixedIncomeCards";
import { FixedIncomeContext } from "../../context/FixedIncome";

import * as S from "./styles";

const MyFixedIncome = () => {
  const { myFixedIncomeProducts, selectedText } = useContext(
    FixedIncomeContext
  );

  const filterMyFixedIncome = (props) => {
    return selectedText === ""
      ? props
      : props.fixedIncome.bondType
          .toLowerCase()
          .includes(selectedText.toLowerCase()) ||
          props.fixedIncome.name
            .toLowerCase()
            .includes(selectedText.toLowerCase());
  };

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(myFixedIncomeProducts?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <S.Container>
      <S.MyFixedIncomeContainer>
        <S.Title>Minhas Rendas Fixas</S.Title>
        <FormsFixedIncome />
      </S.MyFixedIncomeContainer>

      {myFixedIncomeProducts
        ?.filter(filterMyFixedIncome)
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((props) => {
          return (
            <MyFixedIncomeCards
              props={props}
              key={props.fixedIncome.portfolioProductId}
            />
          );
        })}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </S.Container>
  );
};

export default MyFixedIncome;
