import BoxValue from "../BoxValue";

import * as S from "./styles";

const BoxValues = () => {
  return (
    <S.Container>
      <S.Title>Renda Fixa</S.Title>

      <S.ContainerBoxes>
        <BoxValue title="Saldo bruto" value="207.653,10" number />
        <BoxValue title="Valor aplicado" value="170.025,64" number />
        <BoxValue title="Resultado" value="37.638,46" number />
        <BoxValue title="Rentabilidade" value="25,08" percent />
        <BoxValue title="CDI" value="23,68" percent />
        <BoxValue title="% Sobre CDI" value="320" percent />
      </S.ContainerBoxes>
    </S.Container>
  );
};

export default BoxValues;
