import React from 'react';
import Header from './components/Header';
import NavigationTab from './components/navigationTab'
import './styles.css';
import ProductClassAnalysisPage from './components/productClassAnalysisPage';


const App = () => {
  return(
    <main className="App">
      <Header/>
      <div className="contentBody">
        <NavigationTab/>
        <ProductClassAnalysisPage/>
      </div>
    </main>
  )
}

export default App;
