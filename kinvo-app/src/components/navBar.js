import React, {Component} from 'react';
import side1 from '.././images/side1.png';
import side2 from '.././images/side2.png';
import side3 from '.././images/side3.png';
import side4 from '.././images/side4.png';
import side5 from '.././images/side5.png';
import side6 from '.././images/side6.png';
import side7 from '.././images/side7.png';
import side8 from '.././images/side8.png';
import arrow from '.././images/arrow.png';
class NavBar extends Component{
    render(){
        return(
            <div className="sideBar">
                <input type="radio" name="radio" className="hidden" id="radio1"/>
                
                <label for="radio1">
                    <div className="sideButton">
                        <img src={side1} alt="" className="sideImg"/>
                        <div className="sideText">Resumo Da Carteira</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>


                <input type="radio" name="radio" className="hidden" id="radio2"/>
                <label for="radio2">
                    <div className="sideButton">
                        <img src={side2} alt="" className="sideImg"/>
                        <div className="sideText">Meus Produtos</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>


                
                <input type="radio" name="radio" className="hidden" id="radio3"/>
                <label for="radio3">
                    <div className="sideButton">
                        <img src={side3} alt="" className="sideImg"/>
                        <div className="sideText">Meus Proventos</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" name="radio" className="hidden" id="radio4"/>
                <label for="radio4">
                    <div className="sideButton">
                        <img src={side4} alt="" className="sideImg"/>
                        <div className="sideText">Análise por Classe de Produto</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" name="radio" className="hidden" id="radio5"/>
                <label for="radio5">
                    <div className="sideButton">
                        <img src={side5} alt="" className="sideImg"/>
                        <div className="sideText">Rentabilidade Real</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" name="radio" className="hidden" id="radio6"/>
                <label for="radio6">
                    <div className="sideButton">
                        <img src={side6} alt="" className="sideImg"/>
                        <div className="sideText">Projeção da Carteira</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" name="radio" className="hidden" id="radio7"/>
                <label for="radio7">
                    <div className="sideButton">
                        <img src={side7} alt="" className="sideImg"/>
                        <div className="sideText">Risco x Retorno</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>
                <input type="radio" name="radio" className="hidden" id="radio8"/>
                <label for="radio8">
                    <div className="sideButton">
                        <img src={side8} alt="" className="sideImg"/>
                        <div className="sideText">Cobertura do FGC</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>
            </div>
        );
    }
}

export default NavBar;