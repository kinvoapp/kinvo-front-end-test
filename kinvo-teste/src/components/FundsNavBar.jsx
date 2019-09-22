import React, { Component } from "react";
import StockClassSetOfButtons from "./StockClassSetOfButtons";
import styled from "styled-components";
import { sortedUpperProducts } from "./functionsLibrary";
import StockClassSetOfButtons from "./StockClassSetOfButtons";

// styled-components code
const H = styled.h3`
  font-size: 18px;
  color: #707b81;
  font-family: "helvetica-neue, arial";
`;

const FundsNav = styled.div`
  display: flex;
  align-items: center;

  form {
    justify-content: right;
  }
`;

// -----------------------------------------------------------------------------

class FundsNavBar extends Component {
  state = {
    // Importing data inside an object through the API
    products: sortedUpperProducts(),
    searchTerm: ""
  };

  searchHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <FundsNav>
          <H>Fundos</H>
          <form>
            <input
              type="text"
              onChange={this.searchHandler}
              value={this.state.searchTerm}
            />
          </form>
        </FundsNav>

        <div>
          <StockClassSetOfButtons
            product={this.state.products}
            searchFilter={this.state.searchTerm}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FundsNavBar;
