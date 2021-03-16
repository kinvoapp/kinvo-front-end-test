import React from 'react'

import Portfolio from './Portfolio/Portfolio';
import Products from './Products/Products';
import Search from './Search/Search';
import { Container, Card } from './styles';


export default function Content() {
  return (
    <Container>
      
      <h3>Renda Fixa</h3>
      <div className='container'>
        <Portfolio/>
      </div>
      <Card>
        <div className='header'>
          <span>Minhas Rendas Fixas</span>
          <Search/>
        </div>  
        <Products/>
      </Card>
    </Container>
  )
}
