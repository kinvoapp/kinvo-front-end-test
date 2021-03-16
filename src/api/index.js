import { transformToJson, showTheErrorInConsole } from "./utils";

const URL_BASE =
  "https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData";

const takeInfoAboutProducts = (j) => j.data.snapshotByProduct;
const takeInfoAboutWalltet = (j) => j.data.snapshotByPortfolio;

export async function getAllInformationByProducts() {
  return fetch(URL_BASE)
    .then(transformToJson)
    .then(takeInfoAboutProducts)
    .catch(showTheErrorInConsole);
}

export async function getInformationByWallet() {
  return fetch(URL_BASE)
    .then(transformToJson)
    .then(takeInfoAboutWalltet)
    .catch(showTheErrorInConsole);
}
