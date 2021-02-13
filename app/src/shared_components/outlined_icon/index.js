import React from 'react'
import {whiteIcons} from '../../assets/icons'
import { Container } from './styles'

export default function Button({ active, icon, text, greatText, styles, onClick }) {
 
    return (
        <Container type='button' onClick={onClick} styles={{ ...styles }}>
            <div className={active ? 'active_outlined_icon' :'outlined_icon'}>
                {greatText && <p>{greatText}</p>}
                {icon && <img src={whiteIcons[icon]} alt={icon} />}
                
            </div>
            {text && <p>{text}</p>}
        </Container>
    )
}