import React, {Component} from 'react';
import Header from './components/header';
import NavBar from './components/navBar';
import Content from './components/content';
import './App.css';

class App extends Component{

  state={
    radios: [0,0,0,0,0,0,0,0]
  }; 


  handleEvent=(event) =>{
    let radios= [0,0,0,0,0,0,0,0];
    radios[event.target.value]=1;
    this.setState({
        radios: radios
    });
  };
  
  handleChoice(){
    const radios=this.state.radios;
    let classe="hidden";
    if(radios[4]===1){
      classe="analisePorClasse";
    }
    return classe;
  };

  render(){
    return (
      <div className="appKinvo">
        <div className="header">
          <Header/>
        </div>
        <div className="sideBar">
          <NavBar 
          onEvent={this.handleEvent}
          radios={this.state.radios}
          />
        </div>
        <div className="content">
          <Content className={this.handleChoice}/>
        </div>
      </div>
    );
  }
}

export default App;
