import React, { useState } from 'react'
import { Container } from './styles'
import OutlinedIcon from '../outlined_icon'
import {withRouter} from 'react-router-dom'

function Accordion({ onChange, options, location }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [innerOption, setInnerOption] = useState('')

    const pathName = location.pathname ? location.pathname.split('/').slice(1) : ['', '']


    const handleInnerOption = (o, i) => {
        setInnerOption(i.name)
        onChange && onChange(o.pathname, i.pathname)
    }

    const handleSelectedOption = (val) => {
            setSelectedOption(val)
            setInnerOption('')
    }

    return (
        <Container>
            {options.map((o, key) =>
                <div key={key + 'option'} className={o.option === selectedOption.option ? 'accordion_active' : 'accordion'}>
                    <div onClick={() => handleSelectedOption(o)}
                        className={(o.option === selectedOption.option || o.pathname === pathName[0]) ? 'accordion_title active' : 'accordion_title'}>
                        <OutlinedIcon active={o.pathname === pathName[0]} icon={o.icon} text={o.option} />
                        <div className='arrow_left'>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div className='accordion_content'>
                        {o.innerOptions.map((i, key) =>
                            <div key={key + 'inner_option'} onClick={() => handleInnerOption(o, i)}
                                className={(innerOption === i.name || i.pathname === pathName[1]) ? 'accordion_inner_option active' : 'accordion_inner_option'}>
                                <li><span>{i.name}</span></li>
                                <div className='arrow_left'>
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Container>

    )
}

export default withRouter(Accordion)