import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApplicationShell } from './components/ApplicationShell'

function App() {
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
