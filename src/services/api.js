import axios from 'axios';

const api = axios.create({
    baseURL: 'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io'
})

export default api;