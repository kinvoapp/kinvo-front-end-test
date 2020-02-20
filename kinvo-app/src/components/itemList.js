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
                    <CurrencyFormat value={this.props.product.equity}  fixedDecimalScale={true} decimalScale={2}  decimalSeparator=',' displayType="text" prefix='R$ '/>
                    
                </div>

                <div className="listInfoText quant">
                    <div className="labelInfo">Quant</div>
                    {this.props.product.amount}
                </div>

                <div className="listInfoText preco">
                    <div className="labelInfo">PREÇO MÉDIO</div>
                    <CurrencyFormat value={this.props.product.averagePrice} fixedDecimalScale={true} decimalScale={2}  decimalSeparator=',' displayType="text" prefix='R$ '/>    
                </div>

                <div className="listInfoText ultima">
                    <div className="labelInfo">ULTIMA COTAÇÃO</div>
                    <CurrencyFormat value={this.props.product.lastQuotation} fixedDecimalScale={true} decimalScale={2}  decimalSeparator=',' displayType="text" prefix='R$ '/>
                </div>

                <div className="listInfoText yield">
                    <div className="labelInfo">YIELD(1M)</div>
                    {this.props.product.currentMonthYield.toString().replace('.',',')}%
                </div>

                <div className="listInfoText yield12m">
                    <div className="labelInfo">YIELD(12M)</div>
                    {this.props.product.lastTwelveMonthsYeld.toString().replace('.',',')}%
                </div>

                <div className="listInfoText carteira">
                    <div className="labelInfo">% CARTEIRA</div> 
                    {this.getCarteira().toFixed(2).toString().replace('.',',')}%                          
                </div>
            </div>
        );
    }
    getCarteira(){
        const carteira=((this.props.product.equity / this.props.carteiraTotal) * 100);
        return carteira;
    }

}

export default ItemList;