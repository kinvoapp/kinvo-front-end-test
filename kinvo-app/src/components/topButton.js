import React, {Component} from 'react';

class TopButton extends Component{
    render(){
        return(
            <div>
                <div className="topButtonDiv">
                            <input type="radio" value="0" className="hidden" checked={this.props.topButton[0] === 1} onChange={this.props.onEventTopButton} id="topButton1"/>
                            <label for="topButton1">
                                <div className={this.handleClassButton(0)}>
                                    <div className="buttonText">Ações</div>
                                </div>
                            </label>
    
                            <input type="radio" value="1" className="hidden" checked={this.props.topButton[1] === 1} onChange={this.props.onEventTopButton} id="topButton2"/>
                            <label for="topButton2">
                                <div className={this.handleClassButton(1)}>
                                    <div className="buttonText">Nome da Classe</div>
                                </div>
                            </label>
    
                            <input type="radio" value="2" className="hidden" checked={this.props.topButton[2] === 1} onChange={this.props.onEventTopButton} id="topButton3"/>
                            <label for="topButton3">
                                <div className={this.handleClassButton(2)}>
                                    <div className="buttonText">Nome da Classe</div>
                                </div>
                            </label>
    
                            <input type="radio" value="3" className="hidden" checked={this.props.topButton[3] === 1} onChange={this.props.onEventTopButton} id="topButton4"/>
                            <label for="topButton4">
                                <div className={this.handleClassButton(3)}>
                                    <div className="buttonText">Nome da Classe</div>
                                </div>
                            </label>
                        </div>
            </div>
        );
    }
    handleClassButton(num){
        let classe="topButton";
        if(this.props.topButton[num]===1){
            classe+=" active";
        }
        if(num===0){
            classe+=" first";
        }
        return classe;
    }
}
export default TopButton;