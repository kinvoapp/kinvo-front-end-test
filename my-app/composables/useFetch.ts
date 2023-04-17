import axios from 'axios'

export const useFetch = (url: string) => {

  const config = useRuntimeConfig()
  console.log(config)
  axios({
    method: 'get',
    url: `${config.public.apiBase}${url}`,
  }).then((res: any) => {
    console.log(res)
  })
}