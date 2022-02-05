import axios from 'axios'

const baseURL = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/'

const api = axios.create({
    baseURL
})

export default api;