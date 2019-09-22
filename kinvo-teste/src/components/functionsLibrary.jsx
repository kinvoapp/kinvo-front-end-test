const externUrl =
  "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation";

// Função para importar os dados da API
export function getDataFromUrl(dataurl) {
  const httpreq = new XMLHttpRequest();
  httpreq.open("GET", dataurl, false);
  httpreq.send(null);
  return httpreq.responseText;
}

// Transforma os nomes em maíusculos e os ordena crescentemente
export function sortedUpperProducts() {
  const data = JSON.parse(getDataFromUrl(externUrl));
  const finalArray = [];

  data.data.products.forEach(product => {
    const nomeMaiusculo = product.productName.toUpperCase();
    const splitNomeMaiusculo = nomeMaiusculo.split(" ");
    product.productName = "";

    for (let i = 2; i < splitNomeMaiusculo.length; i++) {
      if (i > 2) {
        product.productName += " " + splitNomeMaiusculo[i];
      } else {
        product.productName += splitNomeMaiusculo[i];
      }
    }

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

// Reverte uma string
export function reverseString(strg) {
  let newString = "";

  for (let i = strg.length - 1; i >= 0; i--) {
    newString += strg[i];
  }

  return newString;
}

// Coloca um número no padrão brasileiro de dinheiro
export function styleMoney(money) {
  const moneyString = money.toString();
  let countNumbers = 0;
  let moneyFinal = "";

  for (let i = moneyString.length - 1; i >= 0; i--) {
    countNumbers++;

    if (moneyString[i] === ".") {
      moneyFinal += ",";
      countNumbers = 0;
    } else {
      moneyFinal += moneyString[i];
    }

    if (countNumbers === 3) {
      moneyFinal += ".";
      countNumbers = 0;
    }
  }

  return reverseString(moneyFinal);
}
