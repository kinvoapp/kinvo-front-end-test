import React , {Component} from 'react';
import './App.css';
import LogoKinvo from './LogoKinvo';
import ButtonsLeft from './ButtonsLeft'


class App extends Component {
  render(){
    return (
      <div className="App">
        <LogoKinvo />
        <ButtonsLeft />
      </div>
    );
  }
}

export default App;
