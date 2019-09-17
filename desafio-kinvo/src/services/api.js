import Axios from 'axios';

const api = Axios.create({baseURL: 'https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation'})

export default api;