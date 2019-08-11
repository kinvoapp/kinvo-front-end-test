import axios from "axios";
//https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation
const api = axios.create({
  baseURL: "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/"
});

export default api;
