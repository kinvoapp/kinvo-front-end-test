import axios from 'axios';

export default axios.create({
  baseURL:
    'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData',
  method: 'get',
});
