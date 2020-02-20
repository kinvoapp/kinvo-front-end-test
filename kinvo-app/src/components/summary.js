import React, {Component} from 'react';
import CurrencyFormat from 'react-currency-format';

class Summary extends Component{
    render(){
        return(
                <div>
                    <div className="listInfo">
                        <div className="topInfo">
                            <div className="label">SALDO BRUTO</div>
                            <CurrencyFormat value={this.props.list.data.summary.grossBalance} thousandSeparator={true} decimalSeparator=',' thousandSeparator='.' displayType="text" prefix='R$ '/>
                        </div>

                        <div className="topInfo">
                        <div className="label">VALOR APLICADO</div>
                            <CurrencyFormat value={this.props.list.data.summary.appliedValue} thousandSeparator={true} decimalSeparator=',' thousandSeparator='.' displayType="text" prefix='R$ '/>
                            
                        </div>

                        <div className="topInfo">
                            <div className="label">GANHO DE CAPITAL</div>
                            <CurrencyFormat value={this.props.list.data.summary.capitalGains} thousandSeparator={true} decimalSeparator=',' thousandSeparator='.' displayType="text" prefix='R$ '/>
                            
                        </div>

                        <div className="topInfo">
                            <div className="label">TOTAL DISTRIBUIDOS</div>
                            <CurrencyFormat value={this.props.list.data.summary.earnings} thousandSeparator={true} decimalSeparator=',' thousandSeparator='.' displayType="text" prefix='R$ '/>
                        </div>

                        <div className="topInfo">
                            <div className="label yi">YIELD</div>
                            {this.props.list.data.summary.yield.toString().replace('.',',')}%
                        </div>
                    </div>
                </div>

        );
    }
}

export default Summary;