import axios from 'axios'

const baseURL = 'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io'

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
})

export default {
    get(url){
        return axiosInstance.get(url)
    },
}