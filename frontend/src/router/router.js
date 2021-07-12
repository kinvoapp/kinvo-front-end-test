import 
{ 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import React from 'react';
import Page from '../pages/Page';

function Routes()
{
    return(
        <Router>
            <Switch>
                <Route path='/' exact component = { Page } />
            </Switch>
        </Router>
    )
}

export default Routes;