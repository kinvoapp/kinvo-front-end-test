import { NavSubItemContainer } from './style'

import {FaChevronRight} from 'react-icons/fa'

function NavSubItem({ title, active }){
    return(
        <NavSubItemContainer className={active ? 'active': ''}>
            <p>{ title }</p>
            <FaChevronRight color='#9DA5AC'/>
        </NavSubItemContainer>
    )
}

export default NavSubItem