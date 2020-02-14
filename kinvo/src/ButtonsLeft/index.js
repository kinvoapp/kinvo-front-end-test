import React , {Component} from 'react';
import ImgButton1 from '.././Images/imgButton1.png';
import ImgButton2 from '.././Images/imgButton2.png';
import ImgButton3 from '.././Images/imgButton3.png';
import ImgButton4 from '.././Images/imgButton4.png';
import ImgButton5 from '.././Images/imgButton5.png';
import ImgButton6 from '.././Images/imgButton6.png';
import ImgButton7 from '.././Images/imgButton7.png';
import ImgButton8 from '.././Images/imgButton8.png';
import path from '.././Images/path.png';
import PageList from '.././PageList';
import {Line} from '.././styles';
import {LeftSide} from '.././styles';
import {TextButton} from '.././styles';
import {Arrow} from '.././styles';

class ButtonsLeft extends Component{
    mostra = this.mostra.bind(this);
    esconde = this.esconde.bind(this);
    mostra(element){
        document.getElementById('Teste').style.display='block';
    }
    esconde(element){
        document.getElementById('Teste').style.display='none';
    }
    render(){
        return (
            <Line width = {1366}>
    
            <LeftSide>
    
                <input type="radio" name="options" id="item-1" onChange = {this.esconde} class="Hide"/>
                <label for="item-1">
                    <div class="buttons">
                    <div class="imgButtons">
                        <img class="logoButtons" src={ImgButton1} alt=""/>
                    </div>
                    <TextButton width={72} height= {32}>
                        Resumo Da Carteira
                    </TextButton>
                    <Arrow top = {20} left = {74}>
                        <img src = {path} alt=""/>
                    </Arrow>
                    </div>
                </label>
    
                <input type="radio" name="options" id="item-2" onChange = {this.esconde} class="Hide"/>
                <label for="item-2">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton2} alt=""/>
                    </div>
                    <TextButton width={56} height= {32}>
                    Meus Produtos
                    </TextButton>
                    <Arrow top = {20} left = {90}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
                
                <input type="radio" name="options" id="item-3" onChange = {this.esconde} class="Hide"/>
                <label for="item-3">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton3} alt=""/>
                    </div>
                    <TextButton width={63} height= {32}>
                    Meus Proventos
                    </TextButton>
                    <Arrow top = {20} left = {83}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
    
                <input type="radio" name="options" id="item-4" onClick = {this.mostra} class="Hide"/>
                <label for= "item-4">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton4} alt=""/>
                    </div>
                    <TextButton width={115} height= {32}>
                    Análise por Classe de Produto
                    </TextButton>
                    <Arrow top = {20} left = {31}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
    
                <input type="radio" name="options" id="item-5" onChange = {this.esconde} class="Hide"/>
                <label for="item-5">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton5} alt=""/>
                    </div>
                    <TextButton width={86} height= {32}>
                    Rentabilidade Real
                    </TextButton>
                    <Arrow top = {20} left = {60}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
    
                <input type="radio" name="options" id="item-6" onChange = {this.esconde} class="Hide"/>
                <label for="item-6">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton6} alt=""/>
                    </div>
                    <TextButton width={69} height= {32}>
                    Projeção da Carteira
                    </TextButton>
                    <Arrow top = {20} left = {77}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
    
                <input type="radio" name="options" id="item-7" onChange = {this.esconde} class="Hide"/>
                <label for="item-7">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton7} alt=""/>
                    </div>
                    <TextButton width={61} height= {32}>
                    Risco x Retorno
                    </TextButton>
                    <Arrow top = {20} left = {85}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
    
                <input type="radio" name="options" id="item-8" onChange = {this.esconde} class="Hide"/>
                <label for="item-8">
                <div class = "buttons">
                    <div class="imgButtons">
                    <img class="logoButtons" src={ImgButton8} alt=""/>
                    </div>
                    <TextButton width={62} height= {32}>
                    Cobertura do FGC
                    </TextButton>
                    <Arrow top = {20} left = {84}>
                    <img src = {path} alt=""/>
                    </Arrow>
                </div>
                </label>
                <div id="Complete" />
            </LeftSide>
    
            <div id="Teste">
                <PageList/>
                
            </div>
            </Line>
        )
    }
}
export default ButtonsLeft;