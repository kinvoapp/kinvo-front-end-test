import React, { useState } from 'react'
import { Container } from './styles'
import OutlinedIcon from '../outlined_icon'

function Accordion({ onChange, options }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [innerOption, setInnerOption] = useState('')

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
            {options.map((o) =>
                <div className={o.option === selectedOption.option ? 'accordion_active' :'accordion'}>
                    <div onClick={() => handleSelectedOption(o)} 
                         className={o.option === selectedOption.option ? 'accordion_title active' :'accordion_title'}>
                        <OutlinedIcon active={o.option === selectedOption.option} icon={o.icon} text={o.option}/>
                    </div>
                    <div className='accordion_content'>
                        {o.innerOptions.map((i) =>
                            <li onClick={() => handleInnerOption(o, i)} 
                                className={innerOption === i.name ? 'accordion_inner_option active' : 'accordion_inner_option'}>
                                <span>{i.name}</span>
                            </li>
                        )}
                    </div>
                </div>
            )}
        </Container>

    )
}

export default Accordion