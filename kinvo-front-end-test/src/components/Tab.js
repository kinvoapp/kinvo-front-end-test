import React, { Component } from 'react'
import './Tab.css';

import magnifier from './../images/magnifier.svg'

export class Tab extends Component {

  render() {
    return (
      <div id="tab-wrapper">
        <div className="tab-links flex-tab-links">
          <button className="tab-link rounded-corners active">Ações</button>
          <button className="tab-link rounded-corners">Nome da Classe</button>
          <button className="tab-link rounded-corners">Nome da Classe</button>
          <button className="tab-link rounded-corners">Nome da Classe</button>

        </div>
        <div className="tab-content">
          <div class="summary">
            <div>
              <span className="summary-label">Saldo bruto</span>
              <span className="summary-value">
                R$ 12.709,14
              </span>
            </div>
            <div>
              <span className="summary-label">Valor aplicado</span>
              <span className="summary-value">
                R$ 10.023,12
              </span>
            </div>
            <div>
              <span className="summary-label">Ganho de capital</span>
              <span className="summary-value">
                R$ 2.686,01
              </span>
            </div>
            <div>
              <span className="summary-label">Total distribuidos</span>
              <span className="summary-value">
                R$ 800,00
              </span>
            </div>
            <div>
              <span className="summary-label">Yield</span>
              <span className="summary-value">
                15%
              </span>
            </div>
          </div>

          <div className="products">
            <div className="products-container">
              <div className="products-header">

                <h4>Fundos</h4>

                <form className="filter">
                  <button class="search-button">
                    <img className="magnifier" src={magnifier} />
                  </button>
                  <input className="filter-input-area" type="text" placeholder="" />
                </form>


              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Tab
