import React from 'react';
import Header from './components/Header';
import NavigationTab from './components/navigationTab'
import ProductAcess from './components/productAcess';
import './styles.css';


const App = () => {
  return(
    <div className="App">
      <Header/>
      <div className="contentBody">
      <NavigationTab/>
      <ProductAcess/>
      </div>
    </div>
  )
}

export default App;
