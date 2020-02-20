import React, { Component } from 'react'
import ProductList from './ProductList'

import './Tab.css';
import magnifier from './../images/magnifier.svg'

export class Tab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      dataQuery: [],
      inputHasValue: false
    }
  }

  componentDidMount() {

    fetch("https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json.data,
        })
      });
  }

  filter = (event) => {
    let result = this.state.data.products.filter(
      product => product.productName.toLowerCase().includes(event.target.value.toLowerCase())
    );

    this.setState({
      dataQuery: result,
      inputHasValue: event.target.value.length > 0 ? true : false
    });
    console.log(this.state.dataQuery)
  }

  render() {

    if (!this.state.isLoaded) {
      return (
        <div style={{ width: '100%', textAlign: "center", paddingBottom: "20px" }}>
          <span>Loading...</span>
        </div>
      )
    } else {
      let { data: { summary, products } } = this.state;

      return (
        <div id="tab-wrapper">
          <div className="tab-links flex-tab-links">

            <button className="tab-link rounded-corners active">Ações</button>

            <button className="tab-link rounded-corners">Nome da Classe</button>
            <button className="tab-link rounded-corners">Nome da Classe</button>
            <button className="tab-link rounded-corners">Nome da Classe</button>

          </div>
          <div className="tab-content">
            <div className="summary">
              <div>
                <span className="summary-label">Saldo bruto</span>
                <span className="summary-value">
                  R$ {summary.grossBalance}
                </span>
              </div>
              <div>
                <span className="summary-label">Valor aplicado</span>
                <span className="summary-value">
                  R$ {summary.appliedValue}
                </span>
              </div>
              <div>
                <span className="summary-label">Ganho de capital</span>
                <span className="summary-value">
                  R$ {summary.capitalGains}
                </span>
              </div>
              <div>
                <span className="summary-label">Total distribuidos</span>
                <span className="summary-value">
                  R$ {summary.earnings}
                </span>
              </div>
              <div>
                <span className="summary-label">Yield</span>
                <span className="summary-value">
                  {summary.yield}%
                </span>
              </div>
            </div>

            <div className="products">
              <div className="products-container">

                <div className="products-header">
                  <h4>Fundos</h4>

                  <form className="filter">
                    <div className="search-button">
                      <img className="magnifier" src={magnifier} alt="magnifier" />
                    </div>
                    <input className="filter-input-area" type="text" onChange={this.filter} />
                  </form>

                </div>

                <div className="products-list">
                  <ul>
                    <ProductList productsData={products} dataQuery={this.state.dataQuery} inputHasValue={this.state.inputHasValue} />
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      )
    }
  }
}

export default Tab
