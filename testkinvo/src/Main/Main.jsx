import React from "react";
import Header from "./Header/Header";
import axios from "axios";

import loading from "../img/loading-buffering.gif";
import Menu from "./Menu/Menu";
import Home from "./Pages/Home";

const dataURL = "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";


function Modal() {
  const style = {
    position: "absolute",
    top: "25%",
    left: "45%",
    width: "auto",
    height: "auto",
    textAlign: "left",
    zIndex: "999",
    padding: "1rem",
    boxSizing: "border-box",
  };

  return (
    <div style={style}>
      <img width="50px" src={loading} alt="" />
    </div>
  );
}

function Main() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(dataURL)
      .then((resp) => setData(resp.data.data))
      .catch((e) => alert("Sem comunicação com o Servidor de Banca de Dados"));
  }, []);

  if (!data) return <Modal />;
  return (
    <>
      <Header data={data.snapshotByPortfolio} />
      <Menu />
      <Home data={data} />
    </>
  );
}

export default Main;
