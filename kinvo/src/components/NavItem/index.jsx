import React, { useState } from 'react'
import Icon from '../../assets/icons/kinvo-icon.svg'

import {FaChevronRight} from 'react-icons/fa'

import { NavItemContainer } from './style'

function NavItem({title, children, active, iconName = 'kinvo'}) {

    const [ show, setShow ] = useState(true)

    const Icon = require(`../../assets/icons/${iconName}-icon.svg`)

    return(
        <>
            <NavItemContainer 
                onClick={() => setShow(!show)}
                className={`${show ? 'show' : ''} ${active ? 'active' : ''}`}>
                <div>
                    <img src={Icon} alt="" />
                    <p>
                        {title}
                    </p>
                </div>
                <FaChevronRight color='#9DA5AC'/>
            </NavItemContainer>
            { children }
        </>
    )
}

export default NavItem