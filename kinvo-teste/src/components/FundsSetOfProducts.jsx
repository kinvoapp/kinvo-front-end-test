import React, { Component } from "react";
import FundsProduct from "./FundsProduct";

class FundsSetOfProducts extends Component {
  // Searchs for the products which contains the search term
  searchingFor(searchTerm) {
    return function(x) {
      return x.productName.includes(searchTerm.toUpperCase());
    };
  }

  render() {
    return (
      <div>
        {this.props.product
          .filter(this.searchingFor(this.props.searchFilter))
          .map(asset => (
            <FundsProduct
              key={asset.productName}
              productName={asset.productName}
              equity={asset.equity}
              amount={asset.amount}
              averagePrice={asset.averagePrice}
              lastQuotation={asset.lastQuotation}
              currentMonthYield={asset.currentMonthYield}
              lastTwelveMonthYeld={asset.lastTwelveMonthsYeld}
            />
          ))}
      </div>
    );
  }
}

export default FundsSetOfProducts;
