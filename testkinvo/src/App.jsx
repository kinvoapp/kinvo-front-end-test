import React from "react";
import Header from "./Main/Header/Header";
import axios from "axios";

const dataURL = "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData";

function Modal() {
  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    width: "25%",
    height: "10vh",
    textAlign:'left',
    backgroundColor: "white",
    zIndex: "999",
    padding: "1rem",
  };

  return <div style={style}>Página está carregando</div>;
}

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(dataURL).then((resp) => setData(resp.data));
  }, []);

  if (!data) return <Modal />;
  return (
    <>
      <Header data={data} />
    </>
  );
}

export default App;
