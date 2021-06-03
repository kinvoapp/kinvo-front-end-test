export function validateFilterDate(data, name) {
  let newData = data.slice();

  switch (name) {
    case "Saldo Bruto":
      newData
        .sort((item1, item2) => {
          return item1.position.equity - item2.position.equity;
        })
        .reverse();

      break;

    case "Valor Investido":
      newData
        .sort((item1, item2) => {
          return item1.position.valueApplied - item2.position.valueApplied;
        })
        .reverse();

      break;

    case "Rentabilidade":
      newData
        .sort((item1, item2) => {
          return item1.position.profitability - item2.position.profitability;
        })
        .reverse();

      break;

    case "% da Cart.":
      newData
        .sort((item1, item2) => {
          return item1.position.portfolioPercentage - item2.position.portfolioPercentage;
        })
        .reverse();

      break;

    case "CDI":
      newData
        .sort((item1, item2) => {
          return item1.position.indexerValue - item2.position.indexerValue;
        })
        .reverse();

      break;

    case "Sobre CDI":
      newData
        .sort((item1, item2) => {
          return item1.position.percentageOverIndexer - item2.position.percentageOverIndexer;
        })
        .reverse();

      break;

    case "Dias até vencimento":
      newData
        .sort((item1, item2) => {
          return item1.due.daysUntilExpiration - item2.due.daysUntilExpiration;
        })
        .reverse();

      break;

    case "Data de Vencimento":
      newData
        .sort((item1, item2) => {
          const splitedDate1 = item1.due.date.split("/");
          const splitedDate2 = item2.due.date.split("/");
          const item1Date = new Date(splitedDate1[2], splitedDate1[1], splitedDate1[0]);
          const item2Date = new Date(splitedDate2[2], splitedDate2[1], splitedDate2[0]);

          return item1Date - item2Date;
        })
        .reverse();

      break;

    default:
      newData = data;
  }

  return newData;
}
