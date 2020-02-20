import React, { Component } from 'react';
import './Section.css';

import Tab from './../Tab';

export class Section extends Component {
  render() {
    return (
      <section>
        <div id="section-wrapper">

          <h3>Análise por Classe de Ativos</h3>
          <div className="tab-container">
            <Tab zIndex={1}/>
          </div>


        </div>
      </section>
    )
  }
}

export default Section
