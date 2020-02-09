import React, { useState, useEffect } from "react";
import List from "./List";
import Summary from "./Summary";
import SearchBar from "../assets/searchBar.png";

const api = `https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation`;

function Container() {
  const [apiData, setaApiData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(response => {
        setaApiData(response);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? null : (
        <>
          <h2
            style={{
              fontFamily: "Helvetica",
              fontSize: "20px",
              color: "#707B81"
            }}
          >
            Análise por Classe de Ativos
          </h2>
          <div style={{ display: "inline-flex" }}>
            <Summary data={apiData.data.summary} />
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "15px"
            }}
          >
            <div style={{ display: "inline-flex" }}>
              <h2
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "18px",
                  color: "#707B81"
                }}
              >
                Fundos
              </h2>
              <img
                src={SearchBar}
                alt="search bar"
                style={{
                  marginLeft: "58vw",
                  height: "35px",
                  cursor: "pointer"
                }}
              />
            </div>
            {apiData.data.products.map(product => {
              return <List key={product.productName} data={product} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Container;
