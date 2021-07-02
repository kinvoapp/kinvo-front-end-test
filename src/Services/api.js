import axios from 'axios';

const api = axios.create({
    baseURL: 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/',
});

export default api;
