import React, { Component } from "react";
import styled from "styled-components";
import { sortedUpperProducts } from "./FunctionsLibrary";
import FundsSetOfProducts from "./FundsSetOfProducts";

// styled-components code
const H = styled.h3`
  font-size: 18px;
  color: #707b81;
  font-family: "helvetica-neue, arial";
`;

const FundsNav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5%;

  div {
    padding: 0 80%;
  }
`;

const DIV = styled.div`
  background-color: #ffffff;
`;

const Input = styled.input`
  padding: 0.3em;
  color: palevioletred;
  background: #eef2f4;
  border: solid 1px #9da5ac;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 0.5em;
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
      <DIV>
        <FundsNav>
          <H>Fundos</H>
          <div>
            <form>
              <Input
                type="text"
                onChange={this.searchHandler}
                value={this.state.searchTerm}
              />
            </form>
          </div>
        </FundsNav>

        <div>
          <FundsSetOfProducts
            product={this.state.products}
            searchFilter={this.state.searchTerm}
          />
        </div>
      </DIV>
    );
  }
}

export default FundsNavBar;
