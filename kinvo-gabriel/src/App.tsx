import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='*'>
          <div>Hello kinvo</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
