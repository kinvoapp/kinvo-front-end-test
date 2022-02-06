import "./App.css";
import { useState, useEffect } from "react";
import api from "./config/axios";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [rendaFixa, setRendaFixa] = useState([]);
  const [minhasRendasFixas, setMinhasRendasFixas] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredCards = !!searchText
    ? minhasRendasFixas.filter((card) => {
        return card.fixedIncome.name
          .normalize("NFD")
          .toLowerCase()
          .includes(searchText.normalize("NFD").toLowerCase());
      })
    : minhasRendasFixas;

  useEffect(() => {
    api
      .get("/mock/getFixedIncomeClassData")
      .then(({ data }) => {
        setRendaFixa(data.data.snapshotByPortfolio);

        setMinhasRendasFixas(data.data.snapshotByProduct);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Header />

      <Main
        rendaFixa={rendaFixa}
        minhasRendasFixas={filteredCards}
        setSearchText={setSearchText}
      />
    </div>
  );
}

export default App;
