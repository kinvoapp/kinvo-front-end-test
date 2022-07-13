import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import { Card } from "../Card";
import { Container, Input, Row, Select } from "./styles";
import searchIcon from '../../assets/search.svg';
import { IncomeContext } from "../../contexts/income";
import { FixedIncomeCard } from "../FixedIncomeCard";
import ReactPaginate from "react-paginate";

export function FixedIncomeSection() {
  const {
    fullData: { snapshotByProduct },
    orderMyFixedIncomesBy,
    filterMyIncomesBy,
    filteredSearch
  } = useContext(IncomeContext)

  const options = [
    { value: "1", text: "Rentabilidade", type: "rent" },
    { value: "2", text: "Total Aplicado", type: "totalApplied" },
  ]

  const [selected, setSelected] = useState();
  const [searchInputFixedIncome, setSearchInputFixedIncome] = useState("");

  const handleChange = (event: any) => {
    orderMyFixedIncomesBy(options[Number(event.target.value) - 1].type)
    setSelected(event.target.value)
  };

  useEffect(() => {
    filterMyIncomesBy(searchInputFixedIncome)
    setUsers(filteredSearch)
  }, [searchInputFixedIncome])

  const [users, setUsers] = useState(filteredSearch);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, index) => {
      return (
        <Row key={index}>
          <FixedIncomeCard type="title" snapshot={item} />
          <FixedIncomeCard type="results" snapshot={item} />
          <FixedIncomeCard type="due" snapshot={item} />
        </Row>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <Card>
      <Container>
        <header>
          <h3>
            Minhas Rendas Fixas
          </h3>
          <div className="search-area">
            <Select
              value={selected}
              onChange={handleChange}
            // onClick={()=>{orderMyFixedIncomesBy("rent")}}
            >
              <option value="0" hidden>
                Ordenar por
              </option>
              {options.map(option => (
                <option key={option.value} value={option.value}>{option.text}</option>
              ))}

            </Select>

            <div className="input-container">
              <img src={searchIcon} alt="Search Icon" />
              <Input
                value={searchInputFixedIncome}
                onChange={(e) => setSearchInputFixedIncome(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div>
          {displayUsers}

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>

      </Container>
    </Card>
  )
}