import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './styles.scss';
import heroBg from './images/hero-bg.png';
import appStore from './images/appstore-btn.svg';
import playStore from './images/playstore-btn.svg';
import caret from './images/caret-down-icon.svg';

class Hero extends Component {
    render() {
        return (
            <section id='about__hero' className='py-5' style={{'backgroundImage': `url(${heroBg})`}}>
                <div className='container'>
                    <div className='row justify-content-center justify-content-lg-start'>
                        <div className='about__hero__layer align-self-center col-10 col-lg-5 h-100'>
                            <div className='row h-100 text-center text-lg-left'>
                                <div className='col-12 align-self-stretch align-self-lg-end mt-5'>
                                    <div className='h1 text-white font-weight-bold mt-2'>
                                        <span className='text-pal-1'>O controle</span> dos seus <span className='text-pal-1'>investimentos</span> na palma da mão.
                                    </div>
                                </div>
                                <div className='col-12 align-self-stretch align-self-lg-end'>
                                    <div className='row justify-content-center justify-content-lg-start'>
                                        <div className='col-auto pr-0'>
                                            <a role='button' href='#!'>
                                                <img src={appStore} className='mw-100'></img>
                                            </a>
                                        </div>
                                        <div className='col-auto'>
                                            <a role='button' href='#!'>
                                                <img src={playStore} className='mw-100'></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about__hero__overlay'></div>
                <div className='about__hero__scroll'>
                    <Link
                        role='button'
                        className='about__hero__scroll__link'
                        activeClass='about__hero__scroll__link--active'
                        to='about'
                        spy={true}
                        smooth={'easeInOutCubic'}
                        offset={0}
                        duration={1500}
                    >
                        <img src={caret} className='mw-100'></img>
                    </Link>
                </div>
            </section>
        );
    }
}

export default Hero;
