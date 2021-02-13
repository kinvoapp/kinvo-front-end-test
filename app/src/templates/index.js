import React, {useEffect, Fragment} from 'react'
import main from './main'

const templates = {
    main,
}

function TemplateRenderer({componentName, template}) {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])
    
    const chosenTemplate = template ? template.name : 'main'
    let RequestedComponent = templates[chosenTemplate] ? templates[chosenTemplate][componentName] : templates['main'][componentName]
    if(RequestedComponent){
        return <RequestedComponent/>
    } else {
        return <Fragment>404</Fragment>
    }
}

export default TemplateRenderer