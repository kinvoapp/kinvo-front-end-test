import axios from 'axios'
import { useAppStore } from '@/store/app'

export const useFetch = () => {
  const app = useAppStore()
  return new Promise((resolve, reject) => {
    const config = useRuntimeConfig()
    axios({
      method: 'get',
      url: `${config.public.apiBase}`
    }).then((res: any) => {
      app.setNotification({
        show: true,
        message: 'Sucesso!',
        type: 'success'
      })
      resolve(res)
    }).catch((err: any) => {
      app.setNotification({
        show: true,
        message: 'Erro!',
        type: 'error'
      })
      reject(err)
    })
  })
}
