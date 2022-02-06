import axios from 'axios'


const api = axios.create({
    baseURL:'https://covid-api.mmediagroup.fr/v1',
    
})

export default api;