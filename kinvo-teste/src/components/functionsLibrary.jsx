// Function to import data from the API
export function getDataFromUrl() {
  const httpreq = new XMLHttpRequest();
  const externUrl =
    "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation";
  httpreq.open("GET", externUrl, false);
  httpreq.send(null);
  return httpreq.responseText;
}

// Converts names into Upper Case and sorts them increasingly
export function sortedUpperProducts() {
  const data = JSON.parse(getDataFromUrl());
  const finalArray = [];

  data.data.products.forEach(product => {
    const upperCaseName = product.productName.toUpperCase();
    const splitUpperCaseName = upperCaseName.split(" ");
    product.productName = "";

    for (let i = 2; i < splitUpperCaseName.length; i++) {
      if (i > 2) {
        product.productName += " " + splitUpperCaseName[i];
      } else {
        product.productName += splitUpperCaseName[i];
      }
    }

    finalArray.push(product);
  });

  for (let i = 0; i < finalArray.length; i++) {
    for (let j = 0; j < finalArray.length; j++) {
      if (finalArray[i].productName < finalArray[j].productName) {
        const temporaryName = finalArray[j].productName;
        finalArray[j].productName = finalArray[i].productName;
        finalArray[i].productName = temporaryName;
      }
    }
  }

  return finalArray;
}

// Reverses a string
export function reverseString(strg) {
  let newString = "";

  for (let i = strg.length - 1; i >= 0; i--) {
    newString += strg[i];
  }

  return newString;
}

// Puts a number into brazilian money pattern
export function styleMoney(money) {
  const moneyString = money.toString();
  let countNumbers = 0;
  let moneyFinal = "";
  let checkComma = 0;

  for (let i = moneyString.length - 1; i >= 0; i--) {
    countNumbers++;

    if (moneyString[i] === ".") {
      moneyFinal += ",";
      checkComma = 1;
      countNumbers = 0;
    } else {
      moneyFinal += moneyString[i];
    }

    if (countNumbers === 3) {
      moneyFinal += ".";
      countNumbers = 0;
    }
  }

  if (checkComma === 1) return reverseString(moneyFinal);
  return `${reverseString(moneyFinal)},00`;
}
