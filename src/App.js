import React from 'react'
import Header from './Components/Header';
import Menu from './Components/Menu';
import Main from './Components/Main';
import './styles/global.scss';
import './styles/appStyle.scss';
function App() {
  return (
    <div className="App">
      <Header/>
      <section className='section'>
        <Menu/>
        <Main/>
      </section>
    </div>
  );
}

export default App;
