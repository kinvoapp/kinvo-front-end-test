import './App.css'
import { Stack } from '@mui/material'
import { LoadingPage } from './components'
import { useEffect, useState } from 'react'
import { useApiDataStore } from './store/apiData'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApplicationShell } from './components/ApplicationShell'

function App() {
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const { operations: { updateCurrentApiData } } = useApiDataStore()

  useEffect(() => {
    fetch(`https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData`)
      .then((response) => response.json())
      .then((json) => {
        updateCurrentApiData(json.data)
        setIsFetching(false)
      })
      .catch(()=>setIsError(true))
    /*
      Normalmente usaria react-query. Mas, como há somente 1 requisição
      e o tempo é curto, optei por usar a api de fetch nativa 
     */

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isFetching) {
    return (
      <Stack
        width='100vw'
        height='100vh'
        alignItems='center'
        justifyContent='center'
      >
        <LoadingPage />
      </Stack>
    )
  }

  if(isError) {
    <Stack
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <div>Erro</div>
    </Stack>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='*'>
          <ApplicationShell />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
