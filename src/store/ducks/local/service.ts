/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'

export const getMyFixService = async () => {
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
  const resp = await axios.get(`/mock/getFixedIncomeClassData`, headers)

  return resp
}
