import React, { useEffect, useState } from "react";
import Income from "../Income";
import {
  IncomesContainer,
  Title,
  SectionHeader,
  Filter,
  FilterOption,
  SearchBox,
  Container,
} from "./style";
import {
  FaChevronDown as ChevronDown,
  FaSearch as SearchIcon,
} from "react-icons/fa";

const Incomes = ({ data }) => {
  const [rendas, setRendas] = useState(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [incomeData, setIncomeData] = useState(null);

  useEffect(() => {
    if (data) {
      setRendas(() => {
        return data.data.snapshotByProduct;
      });

      setIncomeData(() => {
        return data.data.snapshotByProduct;
      });
    }
  }, [data]);

  useEffect(() => {}, [incomeData]);

  const handleSearchMode = (type) => {
    if (rendas) {
      if (type === "search") {
        const searchInput = document.querySelector("#search");
        const query = rendas.filter((renda) => {
          return renda.fixedIncome.name
            .toLowerCase()
            .includes(searchInput.value.toLowerCase());
        });

        if (query) {
          setIncomeData(() => {
            return query;
          });
        }
      }
    }
  };

  const handleSortMode = (type) => {
    if (rendas) {
      let sortedIncome = null;

      if (type === "valueApplied-low") {
        // Sort by valueApplied: LOW to HIGH.

        sortedIncome = [...rendas].sort((a, b) => {
          if (a.position.valueApplied > b.position.valueApplied) {
            return 1;
          } else if (a.position.valueApplied < b.position.valueApplied) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (type === "valueApplied-high") {
        // Sort by valueApplied: HIGH to LOW.

        sortedIncome = [...rendas].sort((a, b) => {
          if (a.position.valueApplied > b.position.valueApplied) {
            return -1;
          } else if (a.position.valueApplied < b.position.valueApplied) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (type === "profitability-low") {
        // Sort by profitability: HIGH to LOW.

        sortedIncome = [...rendas].sort((a, b) => {
          if (a.position.profitability > b.position.profitability) {
            return 1;
          } else if (a.position.profitability < b.position.profitability) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (type === "profitability-high") {
        // Sort by profitability: HIGH to LOW.

        sortedIncome = [...rendas].sort((a, b) => {
          if (a.position.profitability > b.position.profitability) {
            return -1;
          } else if (a.position.profitability < b.position.profitability) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (type === "equity-low") {
        // Sort by equity: HIGH to LOW.

        sortedIncome = [...rendas].sort((a, b) => {
          if (a.position.equity > b.position.equity) {
            return 1;
          } else if (a.position.equity < b.position.equity) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (type === "equity-high") {
        // Sort by equity: HIGH to LOW.

        sortedIncome = [...rendas].sort((a, b) => {
          if (a.position.equity > b.position.equity) {
            return -1;
          } else if (a.position.equity < b.position.equity) {
            return 1;
          } else {
            return 0;
          }
        });
      }

      setIncomeData(() => {
        return sortedIncome;
      });
    }
  };

  return (
    <IncomesContainer>
      <SectionHeader>
        <Title>Minhas Rendas Fixas</Title>
        <Container>
          <Filter>
            <ul>
              <FilterOption filterTitle>
                <a
                  onClick={() =>
                    setShowFilterOptions((state) => {
                      return !state;
                    })
                  }
                >
                  <span>Ordenar Por</span>
                  <ChevronDown />
                </a>
              </FilterOption>

              {showFilterOptions ? (
                <ol>
                  <FilterOption>
                    <a onClick={() => handleSortMode("valueApplied-low")}>
                      <b>Valor Investido:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => handleSortMode("valueApplied-high")}>
                      <b>Valor Investido:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => handleSortMode("profitability-low")}>
                      <b>Rentabilidade:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => handleSortMode("profitability-high")}>
                      <b>Rentabilidade:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => handleSortMode("equity-low")}>
                      <b>Saldo Bruto:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => handleSortMode("equity-high")}>
                      <b>Saldo Bruto:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                </ol>
              ) : null}
            </ul>
          </Filter>

          <SearchBox>
            <input type="search" id="search" />
            <a onClick={() => handleSearchMode("search")}>
              <SearchIcon />
            </a>
          </SearchBox>
        </Container>
      </SectionHeader>

      {incomeData
        ? incomeData.map((renda, index) => <Income data={renda} key={index} />)
        : null}
    </IncomesContainer>
  );
};

export default Incomes;
