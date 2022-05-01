import axios from "axios";

const url = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'

const api = axios.create({
  baseURL: url
})

export default api;