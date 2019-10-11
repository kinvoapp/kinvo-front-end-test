import axios from 'axios';

const externUrl = 'https://e531b9e5-8ac4-4f50-b408-9f998e452bd1.mock.pstmn.io/getStockConsolidation';
const api = axios.create({ baseURL: externUrl });

export default api;
