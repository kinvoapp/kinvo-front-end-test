import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL; //I'll deploy on netlify it's why a comment that
axios.defaults.baseURL =
  'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getFixedIncome() {
    const { data } = await axios.get();
    return data;
  },
};
