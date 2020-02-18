import React, { Component } from 'react'
import './Sidebar.css'
import SidebarItem from './../SidebarItem';

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
        icon: pizzaChart
      },
      {
        id:2,
        title: 'Meus Produtos',
        icon: boxes
      },
      {
        id:3,
        title: 'Meus Proventos',
        icon: moneyBill
      },
      {
        id:4,
        title: 'Análise por classe de Produto',
        icon: stack
      },
      {
        id:5,
        title: 'Rentabilidade Real',
        icon: diamond
      },
      {
        id:6,
        title: 'Projeção da Carteira',
        icon: chartBoard
      },
      {
        id:7,
        title: 'Risco x Retorno',
        icon: wheel
      },
      {
        id:8,
        title: 'Cobertura do FGC',
        icon: lock
      },

    ]
  }

  render() {

    return (
      <aside>
        <div id="aside-wrapper">
          <ul>
            {this.state.options.map((option) =>
              <SidebarItem key={option.id} title={option.title} icon={option.icon} />
            )}

          </ul>
        </div>
      </aside>
    )
  }
}

export default Aside
