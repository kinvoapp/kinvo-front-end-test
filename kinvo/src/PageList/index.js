import React from 'react';
import '.././App.css';
import {TextSubtitle} from '.././styles';
import {Line} from '.././styles';
import ProductList from '.././ProductList';
class PageList extends React.Component{
    onChangeShow = this.onChangeShow.bind(this);
    onChangeHide = this.onChangeHide.bind(this);
    onChangeShow(element){
        document.getElementById('List').style.display='block';
    }
    onChangeHide(element){
        document.getElementById('List').style.display='none';
    }
    render(){
        return (
            <div>
            {/* PÁGINA QUE CONTÉM AS OPÇÕES + OPÇÃO QUE LIBERA A LISTA PARA FILTRAGEM */}
                <TextSubtitle>
                    <strong>Análise por Classe de Ativos</strong>
                </TextSubtitle>
            {/* OPÇÃO QUE LIBERA LISTA PARA FILTRAGEM */}
                <Line width = {1090}>
                    <input type="radio" name="SecondOptions" id="Option1" onChange = {this.onChangeShow} class="Hide"/>
                    <label for="Option1">
                        <div class="ButtonsInside">
                            <div class="TextInsideButton">
                                <strong>Ações</strong>
                            </div>
                        </div>
                    </label>
            {/* FIM DA OPÇÃO QUE LIBERA LISTA PARA FILTRAGEM */}
                    <input type="radio" name="SecondOptions" id="Option2" onChange = {this.onChangeHide} class="Hide"/>
                    <label for="Option2">
                        <div class="ButtonsInside">
                            <div class="TextInsideButton">
                                <strong>Nome da Classe</strong>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="SecondOptions" id="Option3" onChange = {this.onChangeHide} class="Hide"/>
                    <label for="Option3">
                        <div class="ButtonsInside">
                            <div class="TextInsideButton">
                                <strong>Nome da Classe</strong>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="SecondOptions" id="Option4" onChange = {this.onChangeHide} class="Hide"/>
                    <label for="Option4">
                        <div class="ButtonsInside">
                            <div class="TextInsideButton">
                                <strong>Nome da Classe</strong>
                            </div>
                        </div>
                    </label>
                </Line>
            {/* FIM DAS OPÇÕES */}

            {/* LISTA PARA FILTRAGEM */}
                <Line width = {1090} id="List">
                    <ProductList />
                </Line>
            </div>
        )
    }
}

export default PageList;