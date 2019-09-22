import React, { Component } from "react";
import Asset from "./asset";

class Assets extends Component {
  // Procura os produtos que contêm o termo de busca
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
            <Asset
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

export default Assets;
