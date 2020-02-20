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

                <input type="radio" value="0" className="hidden" checked={this.props.radios[0] === 1} onChange={this.props.onEvent} id="radio1"/>
                <label for="radio1">
                    <div className={this.handleClassButton(0)}>
                        <img src={side1} alt="" className={this.handleClassImage(0)}/>
                        <div className="sideText Res">Resumo Da Carteira</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" value="1" className="hidden" checked={this.props.radios[1] === 1} onChange={this.props.onEvent} id="radio2"/>
                <label for="radio2">
                    <div className={this.handleClassButton(1)}>
                        <img src={side2} alt="" className={this.handleClassImage(1)}/>
                        <div className="sideText MProd">Meus Produtos</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>


                
                <input type="radio" value="2" className="hidden" checked={this.props.radios[2]===1} onChange={this.props.onEvent} id="radio3"/>
                <label for="radio3">
                    <div className={this.handleClassButton(2)}>
                        <img src={side3} alt="" className={this.handleClassImage(2)}/>
                        <div className="sideText MProv">Meus Proventos</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" value="3" className="hidden" checked={this.props.radios[3]===1} onChange={this.props.onEvent} id="radio4"/>
                <label for="radio4">
                    <div className={this.handleClassButton(3)}>
                        <img src={side4} alt="" className={this.handleClassImage(3)}/>
                        <div className="sideText AnalClas">Análise por Classe de Produto</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" value="4" className="hidden" checked={this.props.radios[4]===1} onChange={this.props.onEvent} id="radio5"/>
                <label for="radio5">
                    <div className={this.handleClassButton(4)}>
                        <img src={side5} alt="" className={this.handleClassImage(4)}/>
                        <div className="sideText Rent">Rentabilidade Real</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" value="5" className="hidden" checked={this.props.radios[5]===1} onChange={this.props.onEvent} id="radio6"/>
                <label for="radio6">
                    <div className={this.handleClassButton(5)}>
                        <img src={side6} alt="" className={this.handleClassImage(5)}/>
                        <div className="sideText Proj">Projeção da Carteira</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" value="6" className="hidden" checked={this.props.radios[6]===1} onChange={this.props.onEvent} id="radio7"/>
                <label for="radio7">
                    <div className={this.handleClassButton(6)}>
                        <img src={side7} alt="" className={this.handleClassImage(6)}/>
                        <div className="sideText RxR">Risco x Retorno</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>

                <input type="radio" value="7" className="hidden" checked={this.props.radios[7]===1} onChange={this.props.onEvent} id="radio8"/>
                <label for="radio8">
                    <div className={this.handleClassButton(7)}>
                        <img src={side8} alt="" className={this.handleClassImage(7)}/>
                        <div className="sideText CobFGC">Cobertura do FGC</div>
                        <img src={arrow} alt="" className="arrow"/>
                    </div>
                </label>
            </div>
        );
    }
    
    handleClassButton(num){
        let classe="sideButton";
        if(this.props.radios[num]===1){
            classe+="-active";
        }
        return classe;
    };
    handleClassImage(num){
        let classe="sideImg";
        if(this.props.radios[num]===1){
            classe+=" activeImg";
        }
        return classe;
    };
    

}

export default NavBar;