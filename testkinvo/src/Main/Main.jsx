import React from "react";
import Header from "./Header/Header";
import axios from "axios";

import loading from "../img/loading-buffering.gif";
import Menu from "./Menu/Menu";
import Home from "./Pages/Home";

const dataURL = "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData";

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
    axios.get(dataURL).then((resp) => setData(resp.data));
  }, []);

  if (!data) return <Modal />;
  return (
    <>
      <Header data={data} />
      <Menu />
      <Home data={data} />
    </>
  );
}

export default Main;
