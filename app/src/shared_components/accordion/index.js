import React, { useState } from 'react'
import { Container } from './styles'
import OutlinedIcon from '../outlined_icon'

function Accordion({ onChange, value, title, options }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [setInnerOption, setSelectedInnerOption] = useState('')

    const handleInnerOption = (val) => {
        onChange(val)
        setInnerOption(val)
    }

    return (
        <Container>
            {options.map((o) =>
                <div className='accordion'>
                    <div className='accordion_title'>
                        <OutlinedIcon icon={o.icon} text={o.option}/>
                    </div>
                    <div className='accordion_content'>
                        {o.innerOptions.map((i) =>
                            <div>
                                {i}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Container>

    )
}

export default Accordion