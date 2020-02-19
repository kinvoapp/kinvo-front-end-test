import React, { Component } from 'react'

import SidebarItem from './../SidebarItem';
import './Sidebar.css'

// Image imports
import pizzaChart from '../../images/sidebar/pizza-chart.svg';
import boxes from '../../images/sidebar/boxes.svg';
import moneyBill from '../../images/sidebar/money-bill.svg';
import stack from '../../images/sidebar/stack.svg';
import diamond from '../../images/sidebar/diamond.svg';
import chartBoard from '../../images/sidebar/chart-board.svg';
import wheel from '../../images/sidebar/wheel.svg';
import lock from '../../images/sidebar/lock.svg';


export class Aside extends Component {
  state = {
    options: [
      {
        id:1,
        title: 'Resumo Da Carteira',
        icon: pizzaChart,
        isEnabled: false
      },
      {
        id:2,
        title: 'Meus Produtos',
        icon: boxes,
        isEnabled: false
      },
      {
        id:3,
        title: 'Meus Proventos',
        icon: moneyBill,
        isEnabled: false
      },
      {
        id:4,
        title: 'Análise por classe de Produto',
        icon: stack,
        isEnabled: true //For the happy path
      },
      {
        id:5,
        title: 'Rentabilidade Real',
        icon: diamond,
        isEnabled: false
      },
      {
        id:6,
        title: 'Projeção da Carteira',
        icon: chartBoard,
        isEnabled: false
      },
      {
        id:7,
        title: 'Risco x Retorno',
        icon: wheel,
        isEnabled: false
      },
      {
        id:8,
        title: 'Cobertura do FGC',
        icon: lock,
        isEnabled: false
      },
    ]
  }

  render() {
    return (
      <nav>
        <div id="sidebar-wrapper">
          <ul>
            {this.state.options.map((option) =>
              <SidebarItem key={option.id} title={option.title} 
              icon={option.icon} isEnabled={option.isEnabled}/>
            )}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Aside
