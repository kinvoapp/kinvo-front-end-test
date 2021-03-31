import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL; //I'll deploy on netlify it's why a comment that
axios.defaults.baseURL =
  'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getFixedIncome() {
    const { data } = await axios.get();
    return data;
  },
};
