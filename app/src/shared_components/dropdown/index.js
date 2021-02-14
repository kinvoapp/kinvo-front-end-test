import React, { useState } from 'react'
import { CONTAINER } from './styles'
import {grayIcons} from '../../assets/icons'

function DROPDOWN({ itemKey, items, title, styles, placeholder, id, onChange, value }) {
    const [open, setOpen] = useState(false)

    return (
        <CONTAINER style={{ ...styles }}>
            {title && <h5>{title}</h5>}
            <div className='dropdown_container'>
                <div className='dropdown_title' onClick={() => setOpen(!open)}>
                    <input readOnly="readonly" placeholder={placeholder} id={id} value={value} />
                    <img src={grayIcons['down']} alt={'Arrow down'} />
                </div>
                {!itemKey && items && items.length > 1 &&
                    <div className={open ? 'dropdown_item_container' : 'dropdown_item_container_closed'}>
                        {items.map((i, key) =>
                            <div key={key} onClick={() => { onChange(i); setOpen(!open) }} className='dropdown_item'>
                                {i}
                            </div>
                        )}
                    </div>
                }
                {itemKey && items && items.length > 1 &&
                    <div className={open ? 'dropdown_item_container' : 'dropdown_item_container_closed'}>
                        {items.map((i, key) =>
                            <div key={key} onClick={() => { onChange(i[itemKey]); setOpen(!open) }} className='dropdown_item'>
                                {i[itemKey]}
                            </div>
                        )}
                    </div>
                }
            </div>
        </CONTAINER>
    )


}

export default DROPDOWN