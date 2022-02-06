import React, { useEffect, useState } from "react";
import {
  IncomesContainer,
  Container,
  Title,
  SectionHeader,
  Filter,
  FilterOption,
  SearchForm,
} from "./style";
import Income from "../Income";
import {
  FaChevronDown as ChevronDown,
  FaSearch as SearchIcon,
} from "react-icons/fa";

const Incomes = ({ data }) => {
  const [rendas, setRendas] = useState(null);
  const [sortedMode, setSortedMode] = useState(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [isSearching, setIsSearching] = useState(null);

  useEffect(() => {
    if (data) {
      setRendas(() => {
        return data.data.snapshotByProduct;
      });
    }
  }, [data]);

  const injectIncome = () => {
    if (rendas) {
      // console.log(rendas);

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
          // Sort by profitability: LOW to HIGH.

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
          // Sort by profitability: LOW to HIGH.

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
          // Sort by equity: LOW to HIGH.

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
          // Sort by equity: LOW to HIGH.

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
      } else if (isSearching) {
        const searchInput = document.querySelector("#search");
        const found = rendas.find((renda) => () => {
          console.log("renda.fixedIncome.name: " + renda.fixedIncome.name);
          console.log("searchInput.value " + searchInput.value);

          return renda.fixedIncome.name === searchInput.value;
        });
        console.log("let found: " + found);
        return rendas.map((renda, index) => (
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

          <SearchForm>
            <input type="text" id="search"></input>
            <SearchIcon onClick={() => setIsSearching(true)} />
          </SearchForm>
        </Container>
      </SectionHeader>

      {injectIncome()}
    </IncomesContainer>
  );
};

export default Incomes;
