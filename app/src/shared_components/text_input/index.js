import React from 'react'
import { CONTAINER } from './styles'
import {grayIcons} from '../../assets/icons'

function TEXT_INPUT({ icon, title, styles, placeholder, type, id, onChange, value, disabled }) {

    if (onChange) {
        return (
            <CONTAINER >
                {title && <h5>{title}</h5>}
                <div className='text_input_container' style={{ ...styles }}>
                    {icon && <img src={grayIcons[icon]} alt={icon} />}
                    <input value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                        type={type} />
                </div>

            </CONTAINER>
        )
    }
    return (
        <CONTAINER>
            {title && <h5>{title}</h5>}
            <div className='text_input_container' style={{ ...styles }}>
                {icon && <img src={grayIcons[icon]} alt={icon} />}
                <input id={id} disabled={disabled} placeholder={placeholder} type={type} />
            </div>
        </CONTAINER>
    )
}

export default TEXT_INPUT