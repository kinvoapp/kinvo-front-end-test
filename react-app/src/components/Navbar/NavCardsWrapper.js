import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import HeaderCard from "./NavCards";
import DehazeIcon from "@mui/icons-material/Dehaze";
import NorthIcon from "@mui/icons-material/North";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import axios from "axios";

const NavCardsWrapper = () => {
  const [data, setData] = useState([]);

  const URL =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";


  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.data.snapshotByPortfolio);
    });
  }, [URL]);

  return (
    <CardWrapper>
      <HeaderCard
        title={"saldo bruto"}
        subtitle={data.equity}
        icon={<AttachMoneyIcon />}
      />
      <HeaderCard
        title={"valor aplicado"}
        subtitle={data.valueApplied}
        icon={<NorthIcon />}
      />
      <HeaderCard
        title={"rentabilidade"}
        subtitle={data.percentageProfit + '%'}
        icon={<NorthEastIcon />}
      />
      <HeaderCard
        title={"carteira"}
        color={"#5D41AC"}
        subtitle={"Minha Carteira"}
        icon={<ExpandMoreIcon />}
      />
      <ButtonWrapper>
        <DehazeIcon style={{ color: "#FFF" }} />
      </ButtonWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  background-color: #5d41ac;
  border-radius: 50%;
  width: 35px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7px;
  margin-right: 100px;
`;

export default NavCardsWrapper;
