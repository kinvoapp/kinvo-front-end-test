import React, { Component } from 'react';
import './styles.css';
import '../../styles.css';
import ChooseInputs from './components/ChooseInputs';
import ClassAnalysis from './components/ClassAnalysis';
import ProductList from './components/ProductList';


export default class ProductClassAnalysisPage extends Component {

  render() {
    return (
      <main id="productAcess">
        <div className="productAcessPrincipal">
          <h4>Análise por Classe de Ativos</h4>
          <div className="productSearch">
            <ChooseInputs />
            <div className="productsContainer">
              <ClassAnalysis />
              <ProductList />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
