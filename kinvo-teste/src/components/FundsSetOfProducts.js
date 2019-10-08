import React, { Component } from "react";
import FundsProduct from "./FundsProduct";
import styled from "styled-components";

// styled-components code
const DIV = styled.div`
  margin: 0 2%;
`;

// ----------------------------------------------

class FundsSetOfProducts extends Component {
  // Searchs for the products which contains the search term
  searchingFor(searchTerm) {
    return function(x) {
      return x.productName.includes(searchTerm.toUpperCase());
    };
  }

  render() {
    return (
      <DIV>
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
      </DIV>
    );
  }
}

export default FundsSetOfProducts;
