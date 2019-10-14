import React, { Component } from 'react';
import './styles.css';

export default class SearchList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filteredProducts } = this.props;

    return (
      <div className="searchList">
        {filteredProducts.map((products) => (
          <div className="listProducts">
            <div className="productPurple" />
            <div className="productName text-box"><p>{products.productName}</p></div>

            <div className="currentBalance text-box">
              <p>SALDO ATUAL</p>
              <h3>
R$
                {' '}
                {products.equity}
              </h3>
            </div>
            <div className="text-box">
              <p>QUANT.</p>
              <h3>{products.amount}</h3>
            </div>

            <div className="text-box">
              <p>PREÇO MÉDIO</p>
              <h3>
R$
                {' '}
                {products.averagePrice}
              </h3>
            </div>

            <div className="text-box">
              <p>ÚLTIMA COTAÇÃO</p>
              <h3>
R$
                {' '}
                {products.lastQuotation}
              </h3>
            </div>

            <div className="text-box">
              <p>YIELD (1M)</p>
              <h3>
                {products.currentMonthYield}
%
              </h3>
            </div>

            <div className="text-box">
              <p>YIELD (12M)</p>
              <h3>
                {products.lastTwelveMonthsYeld}
%
              </h3>
            </div>

            <div className="text-box">
              <p>% CARTEIRA</p>
              <h3>12,31%</h3>
            </div>

          </div>
        ))}
      </div>
    );
  }
}
