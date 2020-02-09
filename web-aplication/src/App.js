import React from 'react';
import './App.css';


function App() {
  return (
    <div id = "kinvoWeb">
      <aside>
        <header>
          <div className="divHeader">
            <h1 id="kinvoHeader">KINVO</h1>
            <h1 id="premiumHeader">PREMIUM</h1>
          </div>
        </header>

        <form>
            <div className="sideBtts">
            <h3>Resumo Da Carteira</h3>
            </div>

            <div className="sideBtts">
            <h3>Meus Produtos</h3>
            </div>

            <div className="sideBtts">
            <h3>Análise por Classe de Produto</h3>
            </div>

            <div className="sideBtts">
            <h3>Análise por Classe de Produto</h3>  
            </div> 

            <div className="sideBtts">
            <h3>Rentabilidade Real</h3>
            </div>

            <div className="sideBtts">
            <h3>Projeção da Carteira</h3>
            </div>

            <div className="sideBtts">
            <h3>Risco X Retorno</h3>
            </div>

            <div className="sideBtts">
            <h3>Cobertura do FGC</h3>
            </div>
        </form>
        
      </aside>
    </div>
  );
}

export default App;
