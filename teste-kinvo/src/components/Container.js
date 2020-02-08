import React, { useState, useEffect } from "react";
import List from "./List";

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
      <h2
        style={{ fontFamily: "Helvetica", fontSize: "20px", color: "#707B81" }}
      >
        Análise por Classe de Ativos
      </h2>
      <div>
        {loading ? null : (
          <div style={{ backgroundColor: "#fff" }}>
            {apiData.data.products.map(product => {
              return <List key={product.productName} data={product} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Container;
