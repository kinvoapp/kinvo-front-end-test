import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './styles.scss';
import menuIcon from './images/menu-icon.svg';
import closeIcon from './images/close-icon.svg';

class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modifier: 'sidenav--closed'
        }
        this.modifyStatus = this.modifyStatus.bind(this);
        this.openUp = this.openUp.bind(this);
        this.closeUp = this.closeUp.bind(this);
    }

    modifyStatus(e) {
        if(this.state.modifier === 'sidenav--closed') {
            this.openUp();
        } else {
            this.closeUp();
        }        
    }

    openUp() {
        this.setState({
            modifier: 'sidenav--opened'
        });
    }

    closeUp() {
        this.setState({
            modifier: 'sidenav--closed'
        }); 
    }

    render() {
        return (
            <nav id="sidenav" className={"position-fixed " + this.state.modifier}>
                <div className="sidenav__toggle sidenav__toggle--closed px-3 py-2 d-md-none">
                    <div className="sidenav__toggle__btn sidenav__toggle__btn--closed">
                        <a role="button" onClick={this.modifyStatus}>
                            <img src={menuIcon} alt="Abrir menu" width="32"></img>
                        </a>
                    </div>
                    <div className="sidenav__toggle__btn sidenav__toggle__btn--opened">
                        <a role="button" onClick={this.modifyStatus}>
                            <img src={closeIcon} alt="Fechar menu" width="24"></img>
                        </a>
                    </div>
                </div>
                <div className="sidenav__wrap position-fixed">
                    <header className="sidenav__header p-5">
                        <h3 className="text-white font-weight-bold">Menu</h3>
                    </header>
                    <div className="sidenav__body py-5">
                        <ul className="sidenav__navbar text-white p-0 m-0">
                            <li>
                                <Link
                                    role='button'
                                    className='sidenav__link d-block pl-4 py-4'
                                    activeClass='sidenav__link--active'
                                    to='about'
                                    spy={true}
                                    smooth={'easeInOutCubic'}
                                    offset={-105}
                                    duration={1500}
                                    onClick={this.modifyStatus}
                                >
                                    Sobre a Kinvo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    role='button'
                                    className='sidenav__link d-block pl-4 py-4'
                                    activeClass='sidenav__link--active'
                                    to='resources'
                                    spy={true}
                                    smooth={'easeInOutCubic'}
                                    offset={-105}
                                    duration={1500}
                                    onClick={this.modifyStatus}
                                >
                                    Recursos Avançados
                                </Link>
                            </li>
                            <li>
                                <Link
                                    role='button'
                                    className='sidenav__link d-block pl-4 py-4'
                                    activeClass='sidenav__link--active'
                                    to='web'
                                    spy={true}
                                    smooth={'easeInOutCubic'}
                                    offset={-105}
                                    duration={1500}
                                    onClick={this.modifyStatus}
                                >
                                    Kinvo Web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    role='button'
                                    className='sidenav__link d-block pl-4 py-4'
                                    activeClass='sidenav__link--active'
                                    to='plans'
                                    spy={true}
                                    smooth={'easeInOutCubic'}
                                    offset={-105}
                                    duration={1500}
                                    onClick={this.modifyStatus}
                                >
                                    Planos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        );
    }
}

export default Sidenav;
