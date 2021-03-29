import axios from 'axios';
// import Benefit from '../model/entities/Benefit';

const url = 'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData';

class FixedIncomeService {
  async getAll() {
    return axios.get(url).then(res => {
      const { data } = res.data;
      return data;
    })
  }
}

export default new FixedIncomeService();
