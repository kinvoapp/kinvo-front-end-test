import axios from 'axios'
const urlAPI =
  'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'
const api = axios.create({
  baseURL: urlAPI,
})

export default api
