import "./App.css";
import { useState, useEffect } from "react";
import api from "./config/axios";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [rendaFixa, setRendaFixa] = useState([]);
  const [minhasRendasFixas, setMinhasRendasFixas] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [orderType, setOrderType] = useState("Saldo bruto");

  //? Filtra os cards de acordo com o valor do input de pesquisa
  const filteredCards = !!searchText
    ? minhasRendasFixas.filter((card) => {
        return card.fixedIncome.name
          .normalize("NFD")
          .toLowerCase()
          .includes(searchText.normalize("NFD").toLowerCase());
      })
    : minhasRendasFixas;

  //? Ordena os cards de acordo com o valor investido ou saldo bruto
  const orderedCards = filteredCards.sort((a, b) => {
    if (orderType === "Valor investido") {
      const previus = a.position.valueApplied;
      const next = b.position.valueApplied;

      return previus > next ? -1 : previus < next ? 1 : 0;
    } else if (orderType === "Saldo bruto") {
      const previus = a.position.equity;
      const next = b.position.equity;

      return previus > next ? -1 : previus < next ? 1 : 0;
    }
  });

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
        minhasRendasFixas={orderedCards}
        setSearchText={setSearchText}
        setOrderType={setOrderType}
      />
    </div>
  );
}

export default App;
