import React, { Component } from "react";
import Asset from "./asset";

// Função para importar os dados da API
function getDataFromUrl(dataurl) {
  const httpreq = new XMLHttpRequest();
  httpreq.open("GET", dataurl, false);
  httpreq.send(null);
  return httpreq.responseText;
}

const teste = "abv3 - Ambev";
console.log(teste.split("-")[1]);

const externUrl =
  "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation";

class Assets extends Component {
  render() {
    // Importando os dados da API
    const data = JSON.parse(getDataFromUrl(externUrl));
    console.log(data.data.products);
    return (
      <div>
        {data.data.products.map(asset => (
          <Asset
            key={asset.productName}
            productName={asset.ProductName}
            equity={asset.equity}
            amount={asset.amount}
            averagePrice={asset.averagePrice}
            lastQuotation={asset.lastQuotation}
            currentMonthYield={asset.currentMonthYield}
            lastTwelveMonthYeld={asset.lastTwelveMonthYeld}
          />
        ))}
      </div>
    );
  }
}

export default Assets;
