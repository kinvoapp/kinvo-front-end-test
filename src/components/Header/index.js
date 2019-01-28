import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-scroll'
import './styles.scss';
import logo from '../../images/kinvo-white-logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modifier: 'top-header--fixed'
        }
        this.modifierWatcher = this.modifierWatcher.bind(this);
    }

    modifierWatcher() {
        var node = ReactDOM.findDOMNode(this);
        var rect = node.getBoundingClientRect();
        if(window.scrollY > rect.height) {
            this.setState({
                modifier: 'top-header--rolling'
            })
        } else {
            this.setState({
                modifier: 'top-header--fixed'
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => this.modifierWatcher()
    }

    render() {
        return (
            <header id='top-header' className={'w-100 ' + this.state.modifier}>
                <div className='top-header__container container-fluid p-4'>
                    <nav role='navigation' className='navbar navbar-expand-md row m-0 justify-content-center'>
                        <div className='col-12 col-lg-auto col-xl-3 text-center text-lg-left'>
                            <a role='button' href='#!' className='navbar-brand mx-auto ml-md-0 mr-md-3'>
                                <img src={logo} className='d-inline-block align-middle' alt='Logotipo Kinvo'></img>
                            </a>
                        </div>
                        <div className='col-lg-auto col-xl-6 d-none d-lg-flex'>
                            <div className='collapse navbar-collapse'>
                                <ul className='navbar-nav ml-auto'>
                                    <li className="nav-item active px-md-2">
                                        <Link
                                            role='button'
                                            className='nav-link'
                                            activeClass='nav-link--active'
                                            to='about'
                                            spy={true}
                                            smooth={'easeInOutCubic'}
                                            offset={0}
                                            duration={1500}
                                        >
                                            Sobre a Kinvo
                                        </Link>
									</li>
									<li className="nav-item px-md-2">
                                        <Link 
                                            role='button'
                                            className='nav-link'
                                            activeClass='nav-link--active'
                                            to='advanced-resources'
                                            spy={true} 
                                            smooth={'easeInOutCubic'}
                                            offset={0}
                                            duration={1500}
                                        >
                                            Recursos Avançados
                                        </Link>
									</li>
									<li className="nav-item px-md-2">
										<Link
                                            role='button'
                                            className='nav-link'
                                            activeClass='nav-link--active'
                                            to='kinvo-web'
                                            spy={true}
                                            smooth={'easeInOutCubic'}
                                            offset={0}
                                            duration={1500}
                                        >
                                            Kinvo Web
                                        </Link>
									</li>
                                    <li className="nav-item px-md-2">
										<Link
                                            role='button'
                                            className='nav-link'
                                            activeClass='nav-link--active'
                                            to='plans'
                                            spy={true}
                                            smooth={'easeInOutCubic'}
                                            offset={0}
                                            duration={1500}
                                        >
                                            Planos
                                        </Link>
									</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-auto col-xl-3 navbar-light d-none d-lg-flex'>
                            <div className='collapse navbar-collapse'>
                                <ul className='user-session-nav navbar-nav ml-auto'>
                                    <li className="nav-item active px-md-2">
                                        <a role='button' href='#!' className='nav-link bg-pal-1 text-white'>
                                            Cadastre-se
                                        </a>
									</li>
									<li className="nav-item px-md-2">
                                        <a role='button' href='#!' className='nav-link bg-white text-muted'>
                                            Entrar
                                        </a>
									</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
