import React, {Component} from 'react';


class Content extends Component{
    state={
        topButton: [0,0,0,0]
    }
    render(){
        return(
            <div>
                <div className={this.handleChoice}>
                    <div className="headList">
                        Análise por Classe de Ativos
                    </div>
                    
                    <div className="topButtonDiv">
                        <input type="radio" value="0" className="hidden" checked={this.state.topButton[0] === 1} onChange={this.handleEventTopButton} id="topButton1"/>
                        <label for="topButton1">
                            <div className={this.handleClassButton(0)}>
                                <div className="buttonText">Ações</div>
                            </div>
                        </label>

                        <input type="radio" value="1" className="hidden" checked={this.state.topButton[1] === 1} onChange={this.handleEventTopButton} id="topButton2"/>
                        <label for="topButton2">
                            <div className={this.handleClassButton(1)}>
                                <div className="buttonText">Nome da Classe</div>
                            </div>
                        </label>

                        <input type="radio" value="2" className="hidden" checked={this.state.topButton[2] === 1} onChange={this.handleEventTopButton} id="topButton3"/>
                        <label for="topButton3">
                            <div className={this.handleClassButton(2)}>
                                <div className="buttonText">Nome da Classe</div>
                            </div>
                        </label>

                        <input type="radio" value="3" className="hidden" checked={this.state.topButton[3] === 1} onChange={this.handleEventTopButton} id="topButton4"/>
                        <label for="topButton4">
                            <div className={this.handleClassButton(3)}>
                                <div className="buttonText">Nome da Classe</div>
                            </div>
                        </label>
                    </div>
                </div>

            </div>
        );
    }
    handleClassButton(num){
        let classe="topButton";
        if(this.state.topButton[num]===1){
            classe+=" active";
        }
        return classe;
    }
    handleEventTopButton= (event) =>{
        let topButton=[0,0,0,0];
        topButton[event.target.value]=1;
        this.setState({
            topButton: topButton
        });
    }

    handleChoice(){
        const radios=this.props.radios;
        let classe="hidden";
        if(radios[3]===1){
          classe="analisePorClasse";
        }
        return classe;
    };
}

export default Content;