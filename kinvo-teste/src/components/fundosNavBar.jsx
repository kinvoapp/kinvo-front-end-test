import React, { Component } from "react";
import Assets from "./assets";
import styled from "styled-components";
import { sortedUpperProducts } from "./functionsLibrary";

// styled-components code
const Hfundo = styled.h3`
  font-size: 18px;
  color: #707b81;
  font-family: "helvetica-neue, arial";
`;

const NavFundo = styled.div`
  display: flex;
  align-items: center;

  form {
    justify-content: right;
  }
`;

// -----------------------------------------------------------------------------

class FundosNavBar extends Component {
  state = {
    // Importando os dados da API para um objeto
    products: sortedUpperProducts(),
    search: ""
  };

  searchHandler = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <NavFundo>
          <Hfundo>Fundos</Hfundo>
          <form>
            <input
              type="text"
              onChange={this.searchHandler}
              value={this.state.search}
            />
          </form>
        </NavFundo>

        <div>
          <Assets
            product={this.state.products}
            searchFilter={this.state.search}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FundosNavBar;
