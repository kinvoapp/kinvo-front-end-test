import axios from 'axios'

export const useFetch = () => {
  return new Promise((resolve, reject) => {
    const config = useRuntimeConfig()
    console.log(config)
    axios({
      method: 'get',
      url: `${config.public.apiBase}`,
    }).then((res: any) => {
      resolve(res)
    }).catch((err: any) => {
      reject(err)
    })
  })
}