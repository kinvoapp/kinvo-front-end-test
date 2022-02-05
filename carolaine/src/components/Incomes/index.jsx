import React, { useEffect, useState } from "react";
import {
  IncomesContainer,
  Title,
  SectionHeader,
  Filter,
  FilterOption,
} from "./style";
import Income from "../Income";
import { FaChevronDown as ChevronDown } from "react-icons/fa";

const Incomes = ({ data }) => {
  const [rendas, setRendas] = useState(null);
  const [sortedMode, setSortedMode] = useState();
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  useEffect(() => {
    if (data) {
      setRendas(() => {
        return data.data.snapshotByProduct;
      });
    }
  }, [data]);

  const injectIncome = () => {
    if (rendas != null) {
      let sortedIncome;
      // const sortValueAppliedLow = () => {};
      console.log(rendas);

      if (sortedMode === "valueApplied-low") {
        /**
         * Sort by valueApplied: LOW to HIGH.
         */
        sortedIncome = rendas.sort((a, b) => {
          if (a.position.valueApplied > b.position.valueApplied) {
            return 1;
          } else if (a.position.valueApplied < b.position.valueApplied) {
            return -1;
          } else {
            return 0;
          }
        });

        return sortedIncome.map((renda, index) => (
          <Income data={renda} key={index} />
        ));
      } else if (sortedMode === "valueApplied-high") {
        /**
         * Sort by valueApplied: HIGH to LOW.
         */
        sortedIncome = rendas.sort((a, b) => {
          if (a.position.valueApplied > b.position.valueApplied) {
            return -1;
          } else if (a.position.valueApplied < b.position.valueApplied) {
            return 1;
          } else {
            return 0;
          }
        });

        return sortedIncome.map((renda, index) => (
          <Income data={renda} key={index} />
        ));
      } else if (sortedMode === "default") {
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
        <div>
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
                    <a onClick={() => setSortedMode("default")}>
                      <b>Padrão</b>
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("valueApplied-low")}>
                      <b>Valor Aplicado:</b> Baixo ao Alto
                    </a>
                  </FilterOption>
                  <FilterOption>
                    <a onClick={() => setSortedMode("valueApplied-high")}>
                      <b>Valor Aplicado:</b> Alto ao Baixo
                    </a>
                  </FilterOption>
                </ol>
              ) : null}
            </ul>
          </Filter>
        </div>
      </SectionHeader>

      {injectIncome()}
    </IncomesContainer>
  );
};

export default Incomes;
