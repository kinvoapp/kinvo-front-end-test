//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//-------------------------------------------------------------------< assets >
import arrowDownIcon from "../../../../../assets/sort-arrow-down.svg";
//-------------------------------------------------------------------< styles >
import { Container, Option } from "./styles";
//--------------------------------------------------------------------< types >
import { Dispatch } from "react";
interface IProps {
  sortBy:
    | "bondType"
    | "equity"
    | "indexerValue"
    | "percentageOverIndexer"
    | "portfolioPercentage"
    | "profitability"
    | "valueApplied"
    | "daysUntilExpiration";
  setSortBy: Dispatch<
    | "bondType"
    | "equity"
    | "indexerValue"
    | "percentageOverIndexer"
    | "portfolioPercentage"
    | "profitability"
    | "valueApplied"
    | "daysUntilExpiration"
  >;
}
//===============================================================[ < Sorter > ]
export function Sorter({ sortBy, setSortBy }: IProps) {
  //-------------------------------------------------------------< properties >
  const [showOptions, setShowOptions] = useState(false);
  //-----------------------------------------------------------------< return >
  return (
    <Container onClick={() => setShowOptions(!showOptions)}>
      Ordenar por <img src={arrowDownIcon} alt="v" />
      {showOptions && (
        <div>
          <Option
            selected={sortBy === "bondType"}
            onClick={() => setSortBy("bondType")}
          >
            Classe
          </Option>
          <Option
            selected={sortBy === "valueApplied"}
            onClick={() => setSortBy("valueApplied")}
          >
            Valor Investido
          </Option>
          <Option
            selected={sortBy === "equity"}
            onClick={() => setSortBy("equity")}
          >
            Saldo Bruto
          </Option>
          <Option
            selected={sortBy === "profitability"}
            onClick={() => setSortBy("profitability")}
          >
            Rentabilidade
          </Option>
          <Option
            selected={sortBy === "portfolioPercentage"}
            onClick={() => setSortBy("portfolioPercentage")}
          >
            % da Carteira
          </Option>
          <Option
            selected={sortBy === "percentageOverIndexer"}
            onClick={() => setSortBy("percentageOverIndexer")}
          >
            CDI
          </Option>
          <Option
            selected={sortBy === "indexerValue"}
            onClick={() => setSortBy("indexerValue")}
          >
            Sobre CDI
          </Option>
          <Option
            selected={sortBy === "daysUntilExpiration"}
            onClick={() => setSortBy("daysUntilExpiration")}
          >
            Data
          </Option>
        </div>
      )}
    </Container>
  );
}
