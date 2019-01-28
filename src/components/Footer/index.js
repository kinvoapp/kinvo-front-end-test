import React, { Component } from 'react';
import './styles.scss';
import appStore from '../../images/appstore-btn.svg';
import playStore from '../../images/playstore-btn.svg';
import kinvoLogo from '../../images/kinvo-white-logo.svg';

class Footer extends Component {
    render() {
        return (
            <footer id="main-footer" className="bg-pal-6 small">
                <div className="container">
                    <div className="row justify-content-center text-center text-lg-left py-5">
                        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-auto align-self-center">
                                    <span>Baixe o Kinvo:</span>
                                </div>
                                <div className="col-auto align-self-center pr-0">
                                    <a role="button" href="#!">
                                        <img src={appStore} alt="Botão AppStore"></img>
                                    </a>
                                </div>
                                <div className="col-auto align-self-center">
                                    <a role="button" href="#!">
                                        <img src={playStore} alt="Botão PlayStore"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-center justify-content-lg-end">
                                <div className="col-12 col-lg-auto align-self-center pr-0 mb-2 mb-lg-0">
                                    <span>© 2018 • Todos os direitos reservados</span>
                                </div>
                                <div className="col-12 col-lg-auto align-self-center">
                                    <img src={kinvoLogo} alt="Logotipo Kinvo" width="73"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
