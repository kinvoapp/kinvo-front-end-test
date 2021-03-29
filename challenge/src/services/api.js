import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getFixedIncome() {
    const { data } = await axios.get();
    return data;
  },
};
