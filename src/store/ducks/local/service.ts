import axios from 'axios'

export const getMyFixService = async () => {
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
  const resp = await axios.get(`${process.env.REACT_APP_API_URL}`, headers)

  return resp
}
