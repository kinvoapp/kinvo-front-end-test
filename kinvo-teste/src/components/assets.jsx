import React, { Component } from "react";
import Asset from "./asset";
const externUrl =
  "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation";

// Função para importar os dados da API
function getDataFromUrl(dataurl) {
  const httpreq = new XMLHttpRequest();
  httpreq.open("GET", dataurl, false);
  httpreq.send(null);
  return httpreq.responseText;
}

// Transforma os nomes em maíusculos e os ordena crescentemente
function sortedUpperProducts() {
  const data = JSON.parse(getDataFromUrl(externUrl));
  const finalArray = [];

  data.data.products.forEach(product => {
    const nomeMaiusculo = product.productName.toUpperCase();
    product.productName = nomeMaiusculo.split(" ")[2];
    console.log();
    finalArray.push(product);
  });

  for (let i = 0; i < finalArray.length; i++) {
    for (let j = 0; j < finalArray.length; j++) {
      if (finalArray[i].productName < finalArray[j].productName) {
        const nomeTemporario = finalArray[j].productName;
        finalArray[j].productName = finalArray[i].productName;
        finalArray[i].productName = nomeTemporario;
      }
    }
  }

  return finalArray;
}

class Assets extends Component {
  state = {
    // Importando os dados da API para um objeto
    products: sortedUpperProducts()
  };

  render() {
    return (
      <div>
        {this.state.products.map(asset => (
          <Asset
            key={asset.productName}
            productName={asset.productName}
            equity={asset.equity}
            amount={asset.amount}
            averagePrice={asset.averagePrice}
            lastQuotation={asset.lastQuotation}
            currentMonthYield={asset.currentMonthYield}
            lastTwelveMonthYeld={asset.lastTwelveMonthsYeld}
          />
        ))}
      </div>
    );
  }
}

export default Assets;
