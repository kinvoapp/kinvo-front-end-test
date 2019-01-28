import React, { Component } from 'react';
import './styles.scss';
import notebookScreen from './images/notebook-screen.png';
import notebookKeyboard from './images/notebook-keyboard.png';
import notebookScreenshot from './images/notebook-screenshot.png';

class Web extends Component {
    render() {
        return (
            <section id="web" className="bg-pal-3-5">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-12 col-xl-5 pb-5">
                            <article className="web__explanation mt-4 text-center text-xl-left" data-aos="fade">
                                <div className="h6 font-weight-normal text-white">KinvoWeb</div>
                                <h2 className="text-white font-weight-bold"><span className="text-pal-2">Kinvo.</span> Na palma da mão e na tela do computador.</h2>
                                <p className="mt-5 text-white">Além do aplicativo para smartphone, o Kinvo também conta com uma versão para computador. Você terá acesso a todos os Recursos Avançados disponíveis na versão mobile, com todo o conforto de uma visualização ampla, fácil de usar e com total segurança dos seus dados. Os recursos da versão para computador são exclusivos para assinantes e serão ativados junto com a escolha de um plano. Para acessar a ferramenta, é necessário antes baixar o aplicativo no seu celular.</p>
                            </article>
                        </div>
                        <div className="col-12 col-xl-7 align-self-end">
                            <div className="row h-100" data-aos="fade-left">
                                <div className="col-12">
                                    <div className="web__notebook-screen h-100" style={{'backgroundImage': `url(${notebookScreen})`}}>
                                        <div className="row justify-content-center h-100">
                                            <div className="col-7 align-self-end px-3 pb-1">
                                                <img src={notebookScreenshot} className="web__notebook-screen__img w-100 mt-4 mb-2" alt="Miniatura do vídeo"></img>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="web__notebook-keyboard h-100">
                                        <img src={notebookKeyboard} className="web__notebook-keyboard__img w-100" alt="Teclado de notebook"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Web;
