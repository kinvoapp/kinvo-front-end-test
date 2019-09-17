import React from 'react';
import Header from './components/Header';
import NavLateral from './components/NavLateral';
import Main from './components/Main';

const App = () => (
  <div className="App">
    <Header/>
    {/* <div className="box"> */}
      <NavLateral/>  
      
      <Main/>
    {/* </div> */}
  </div>
);
export default App;
