import React, { useEffect, useState } from "react";
import { RendasContainer, Title } from "./style";
import Renda from "../Renda";

const Rendas = (props) => {
  const [rendas, setRendas] = useState(null);

  useEffect(() => {
    if (props.data) {
      setRendas(() => {
        return props.data.data.snapshotByProduct;
      });
    }
  }, [props.data]);

  return (
    <RendasContainer>
      <Title>Minhas Rendas Fixas</Title>
      {rendas != null
        ? rendas.map((renda, index) => <Renda income={renda} key={index} />)
        : null}
    </RendasContainer>
  );
};

export default Rendas;
