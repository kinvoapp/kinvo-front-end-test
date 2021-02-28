import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AssetClass from './pages/AssetClass'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={AssetClass} />                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;