import React, {Component} from 'react';

class ItemList extends Component{
    

    render(){
        return(
            <div className="listRoll">
                <div className="purpleBar"></div>

                <div className="nomeList">
                    ABEV3-AMBEV
                </div>

                <div className="listInfoText saldo">
                    <div className="labelInfo">SALDO ATUAL</div>
                            R$ 1980,00
                </div>

                <div className="listInfoText quant">
                    <div className="labelInfo">Quant</div>
                            100
                </div>

                <div className="listInfoText preco">
                    <div className="labelInfo">PREÇO MÉDIO</div>
                            R$ 19,80
                </div>

                <div className="listInfoText ultima">
                    <div className="labelInfo">ULTIMA COTAÇÃO</div>
                            20,06
                </div>

                <div className="listInfoText yield">
                    <div className="labelInfo">YIELD(1M)</div>
                            2,31%
                </div>

                <div className="listInfoText yield12m">
                    <div className="labelInfo">YIELD(12M)</div>
                            12,31%
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