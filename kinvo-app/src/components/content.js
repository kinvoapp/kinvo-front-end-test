import React, {Component} from 'react';
import ItemList from './itemList';
import CurrencyFormat from 'react-currency-format';

class Content extends Component{
    state={
        search: ''
    };
    updateSearch= (event) =>{
        this.setState({
            search:  event.target.value
        });
    }
    render(){
        if(this.props.isLoaded){
            return(
                <div>
                    <div className={this.handleChoice}>
                        <div className="headList">
                            Análise por Classe de Ativos
                        </div>
                        
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
    
                        <div className="background-list">
    
                            {this.props.topButton[0]===1 ?
                                <div>
                                    <div className="listInfo">
                                        <div className="topInfo">
                                            <div className="label">SALDO BRUTO</div>
                                            <CurrencyFormat value={this.props.list.data.summary.grossBalance} thousandSeparator={true} displayType="text" prefix='R$ '/>
                                        </div>
    
                                        <div className="topInfo">
                                        <div className="label">VALOR APLICADO</div>
                                            <CurrencyFormat value={this.props.list.data.summary.appliedValue} thousandSeparator={true} displayType="text" prefix='R$ '/>
                                            
                                        </div>
    
                                        <div className="topInfo">
                                            <div className="label">GANHO DE CAPITAL</div>
                                            <CurrencyFormat value={this.props.list.data.summary.capitalGains} thousandSeparator={true} displayType="text" prefix='R$ '/>
                                            
                                        </div>
    
                                        <div className="topInfo">
                                            <div className="label">TOTAL DISTRIBUIDOS</div>
                                            <CurrencyFormat value={this.props.list.data.summary.earnings} thousandSeparator={true} displayType="text" prefix='R$ '/>
                                        </div>
    
                                        <div className="topInfo">
                                            <div className="label">YIELD</div>
                                            {this.props.list.data.summary.yield.toString().replace('.',',')}%
                                        </div>
                                    </div>
                                </div>
                                : null
                            }
                            
                                <div className="listSpace">
                                    {this.props.topButton[0]===1 ?
                                        <div className="listSpace">
                                            <div className="fundos">Fundos</div>
                                            <input type="textArea" value={this.state.search} onChange={this.updateSearch} className="searchBox"/>
                                        </div>
                                        : null
                                    }
                                </div>
                            
                                <div className="listSpace roll">
                                    {this.props.topButton[0]===1 ?
                                        <div>
                                            {this.props.list.data.products.map(product =>{
                                                return <ItemList product={product}/>
                                            })}
                                        </div>
                                        :null
                                    }
                                </div>
                        </div>
                    </div>
    
                </div>
            );
        }else{
            return <h3>loading</h3>;
        }
        
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