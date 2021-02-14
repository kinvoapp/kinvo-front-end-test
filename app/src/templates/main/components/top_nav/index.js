import React from 'react'
import { Container } from './styles'
import { KinvoPremium } from '../../../../assets/images'
import { OutlinedIcon } from '../../../../shared_components'

function TopNav() {

    const toggleLateralNav = () => {
        const lateralNav = document.getElementById('lateral_nav')
        if(!lateralNav.classList.contains('active')){
            lateralNav.classList.add('active')
        } else {
            lateralNav.classList.remove('active')
        }
    }

    return (
        <Container>
            <img src={KinvoPremium} alt='Kinvo Premium' />
            <div className='valued_icon_container'>
                <div className='valued_icon'>
                    <OutlinedIcon className={'small_outlined_icon'} icon='money_bag' />
                    <div className='valued_icon_text'>
                        <p>Saldo Bruto</p>
                        <h4>130.521.230,02</h4>
                    </div>
                </div>
                <div className='valued_icon'>
                    <OutlinedIcon className={'small_outlined_icon'} icon='arrow_up' />
                    <div className='valued_icon_text'>
                        <p>Valor Aplicado</p>
                        <h4>521.230,02</h4>
                    </div>
                </div>
                <div className='valued_icon'>
                    <OutlinedIcon className={'small_outlined_icon'} icon='growing_arrow' />
                    <div className='valued_icon_text'>
                        <p>Rentabilidade</p>
                        <h4>2,34%</h4>
                    </div>
                </div>

                <div className='valued_icon'>
                    <OutlinedIcon className={'small_outlined_icon'}
                        active={true}
                        icon='down' />
                    <div className='valued_icon_text'>
                        <p><b>Carteira</b></p>
                        <h4>Minha Carteira</h4>
                    </div>
                </div>
                <div className='valued_icon'>
                    <OutlinedIcon  className={'small_outlined_icon'}
                        active={true}
                        onClick={() => toggleLateralNav()}
                        icon='menu' />
                </div>
            </div>
 
        </Container>
    )
}

export default TopNav