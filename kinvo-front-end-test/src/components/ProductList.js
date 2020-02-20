import React, { Component } from 'react'
import ProductListItem from './ProductListItem'

export class ProductList extends Component {

  render() {
    
    let { dataQuery, productsData, inputHasValue} = this.props;
     
    if (inputHasValue) {
      return dataQuery.map((product) =>
        <ProductListItem productName={product.productName} equity={product.equity} amount={product.amount} averagePrice={product.averagePrice} lastQuotation={product.lastQuotation} currentMonthYield={product.currentMonthYield} lastTwelveMonthsYeld={product.lastTwelveMonthsYeld} />
      )
    } else {
      return productsData.map((product) =>
        <ProductListItem productName={product.productName} equity={product.equity} amount={product.amount} averagePrice={product.averagePrice} lastQuotation={product.lastQuotation} currentMonthYield={product.currentMonthYield} lastTwelveMonthsYeld={product.lastTwelveMonthsYeld} />
      )
    }
  }
}

export default ProductList
