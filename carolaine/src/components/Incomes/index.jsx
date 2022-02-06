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
  const [sortedMode, setSortedMode] = useState(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    if (data) {
      setRendas(() => {
        return data.data.snapshotByProduct;
      });
    }
  }, [data, searchMode]);

  const injectIncome = () => {
    if (rendas != null) {
      if (searchMode) {
        const searchInput = document.querySelector("#search");

        const query = rendas.filter((renda) => {
          return renda.fixedIncome.name
            .toLowerCase()
            .includes(searchInput.value.toLowerCase());
        });

        if (query) {
          return query.map((renda, index) => (
            <Income data={renda} key={index} />
          ));
        }

        searchInput.value = "";
        setSearchMode(false);
      }

      if (sortedMode) {
        let sortedIncome = null;

        if (sortedMode === "valueApplied-low") {
          // Sort by valueApplied: LOW to HIGH.

          sortedIncome = rendas.sort((a, b) => {
            if (a.position.valueApplied > b.position.valueApplied) {
              return 1;
            } else if (a.position.valueApplied < b.position.valueApplied) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (sortedMode === "valueApplied-high") {
          // Sort by valueApplied: HIGH to LOW.

          sortedIncome = rendas.sort((a, b) => {
            if (a.position.valueApplied > b.position.valueApplied) {
              return -1;
            } else if (a.position.valueApplied < b.position.valueApplied) {
              return 1;
            } else {
              return 0;
            }
          });
        } else if (sortedMode === "profitability-low") {
          // Sort by profitability: HIGH to LOW.

          sortedIncome = rendas.sort((a, b) => {
            if (a.position.profitability > b.position.profitability) {
              return 1;
            } else if (a.position.profitability < b.position.profitability) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (sortedMode === "profitability-high") {
          // Sort by profitability: HIGH to LOW.

          sortedIncome = rendas.sort((a, b) => {
            if (a.position.profitability > b.position.profitability) {
              return -1;
            } else if (a.position.profitability < b.position.profitability) {
              return 1;
            } else {
              return 0;
            }
          });
        } else if (sortedMode === "equity-low") {
          // Sort by equity: HIGH to LOW.

          sortedIncome = rendas.sort((a, b) => {
            if (a.position.equity > b.position.equity) {
              return 1;
            } else if (a.position.equity < b.position.equity) {
              return -1;
            } else {
              return 0;
            }
          });
        } else if (sortedMode === "equity-high") {
          // Sort by equity: HIGH to LOW.

          sortedIncome = rendas.sort((a, b) => {
            if (a.position.equity > b.position.equity) {
              return -1;
            } else if (a.position.equity < b.position.equity) {
              return 1;
            } else {
              return 0;
            }
          });
        }

        return sortedIncome.map((renda, index) => (
          <Income data={renda} key={index} />
        ));
      } else {
        return rendas.map((renda, index) => (
          <Income data={renda} key={index} />
        ));
      }
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
                    <a onClick={() => setSortedMode("valueApplied-low")}>
                      <b>Valor Investido:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("valueApplied-high")}>
                      <b>Valor Investido:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("profitability-low")}>
                      <b>Rentabilidade:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("profitability-high")}>
                      <b>Rentabilidade:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("equity-low")}>
                      <b>Saldo Bruto:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("equity-high")}>
                      <b>Saldo Bruto:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                </ol>
              ) : null}
            </ul>
          </Filter>

          <SearchBox>
            <input type="search" id="search" />
            <a onClick={() => setSearchMode(true)}>
              <SearchIcon />
            </a>
          </SearchBox>
        </Container>
      </SectionHeader>

      {injectIncome()}
    </IncomesContainer>
  );
};

export default Incomes;
