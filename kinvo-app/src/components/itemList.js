import React, {Component} from 'react';
import CurrencyFormat from 'react-currency-format';

class ItemList extends Component{
    

    render(){
        return(
            <div className="listRoll">
                <div className="purpleBar"></div>

                <div className="nomeList">
                    {this.props.product.productName}
                </div>

                <div className="listInfoText saldo">
                    <div className="labelInfo">SALDO ATUAL</div>
                    <CurrencyFormat value={this.props.product.equity} thousandSeparator={true} displayType="text" prefix='R$ '/>
                    
                </div>

                <div className="listInfoText quant">
                    <div className="labelInfo">Quant</div>
                    {this.props.product.amount}
                </div>

                <div className="listInfoText preco">
                    <div className="labelInfo">PREÇO MÉDIO</div>
                    <CurrencyFormat value={this.props.product.averagePrice} thousandSeparator={true} displayType="text" prefix='R$ '/>    
                </div>

                <div className="listInfoText ultima">
                    <div className="labelInfo">ULTIMA COTAÇÃO</div>
                    <CurrencyFormat value={this.props.product.lastQuotation} thousandSeparator={true} displayType="text" prefix='R$ '/>
                </div>

                <div className="listInfoText yield">
                    <div className="labelInfo">YIELD(1M)</div>
                    {this.props.product.currentMonthYield}%
                </div>

                <div className="listInfoText yield12m">
                    <div className="labelInfo">YIELD(12M)</div>
                    {this.props.product.lastTwelveMonthsYeld}%
                </div>

                <div className="listInfoText carteira">
                    <div className="labelInfo">% CARTEIRA</div>
                            12,31%
                </div>
            </div>
        );
    }


}

export default ItemList;