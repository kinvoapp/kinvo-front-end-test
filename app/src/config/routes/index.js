import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TemplateRenderer from '../../templates/index'


function Routes(props) {
    return (
        <Switch>
             <Route path='/' component={() => <TemplateRenderer componentName='FixedIncome' />} />
        </Switch>
    )
}

export default Routes