

import axios from 'axios'

const baseURL = "https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData"

export default async function APIFetcher() {
  const response = await axios.get(baseURL);
  const result = await response.json();
  return result.data

}



//.then(res => {
//  console.log(res.data)
//  setFixedIncomes(res.data)
//})
//.catch((error) => {
//  console.log(error);
//})
