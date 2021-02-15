import React, { Fragment } from 'react'
import { Container } from './styles'
import { KinvoPremium } from '../../../../assets/images'
import { OutlinedIcon } from '../../../../shared_components'
import { useWindowSize } from '../../../../hooks'

function TopNav() {
    const windowSize = useWindowSize()

    const toggleLateralNav = () => {
        const lateralNav = document.getElementById('lateral_nav')
        const lateralNavContainer = document.getElementById('lateral_nav_background')
        if (!lateralNav.classList.contains('active')) {
            lateralNav.classList.add('active')
            lateralNavContainer.classList.add('active_lnav_background')
        } else {
            lateralNav.classList.remove('active')
            lateralNavContainer.classList.remove('active_lnav_background')
        }
    }

    return (
        <Container>
            <img src={KinvoPremium} alt='Kinvo Premium' />
            <div className='valued_icon_container'>
                {windowSize.width > 960 &&
                    <Fragment>
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
                    </Fragment>
                }
                <div className='valued_icon'>
                    <OutlinedIcon className={'small_outlined_icon'}
                        active={true}
                        onClick={() => toggleLateralNav()}
                        icon='menu' />
                </div>
            </div>

        </Container>
    )
}

export default TopNav