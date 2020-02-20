import React, { Component } from 'react'

import './ProductListItem.css';

export class ProductListItem extends Component {
  render() {
    let { productName, equity, amount, averagePrice, lastQuotation,
      currentMonthYield, lastTwelveMonthsYeld } = this.props;

    return (
      <li className="products-list-item-wrapper">
        <div className="product-data">
          <div className="product-name">
            <div className="purple-mark"></div>
            <span>{productName}</span>
          </div>
          <div className="equity">
            <span className="product-label">Saldo atual</span>
            <span className="product-value">R${equity}</span>
          </div>
          <div className="amount">
            <span className="product-label">Quant.</span>
            <span className="product-value">{amount}</span>
          </div>
          <div className="average-price">
            <span className="product-label">Preço médio</span>
            <span className="product-value">R${averagePrice}</span>
          </div>
          <div className="average-price">
            <span className="product-label">Última quotação</span>
            <span className="product-value">R${lastQuotation}</span>
          </div>
          <div className="last-quotation">
            <span className="product-label">Yield (1M)</span>
            <span className="product-value">{currentMonthYield}%</span>
          </div>
          <div className="current-month-yield">
            <span className="product-label">Yield (12M)</span>
            <span className="product-value">{lastTwelveMonthsYeld}%</span>
          </div>
          <div className="last-twelve-months-yeld">
            <span className="product-label">% carteira</span>
            <span className="product-value">{lastTwelveMonthsYeld}%</span>
          </div>
        </div>

      </li>
    )
  }
}

export default ProductListItem
