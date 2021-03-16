import { useContext } from "react";

import { FixedIncomeContext } from "../../context/FixedIncome";
import { formatedNumber } from "../../helpers";

import BoxValue from "../BoxValue";
import Loading from "../Loading";

import * as S from "./styles";

const BoxValues = () => {
  const { walletInformation } = useContext(FixedIncomeContext);

  if (!walletInformation) return <Loading />;
  return (
    <S.Container>
      <S.Title>Renda Fixa</S.Title>

      <S.ContainerBoxes>
        <BoxValue
          title="Saldo bruto"
          value={formatedNumber(walletInformation.equity)}
          number
        />
        <BoxValue
          title="Valor aplicado"
          value={formatedNumber(walletInformation.valueApplied)}
          number
        />
        <BoxValue
          title="Resultado"
          value={formatedNumber(walletInformation.equityProfit)}
          number
        />
        <BoxValue
          title="Rentabilidade"
          value={walletInformation.percentageProfit}
          percent
        />
        <BoxValue title="CDI" value={walletInformation.indexerValue} percent />
        <BoxValue
          title="% Sobre CDI"
          value={walletInformation.percentageOverIndexer}
          percent
        />
      </S.ContainerBoxes>
    </S.Container>
  );
};

export default BoxValues;
