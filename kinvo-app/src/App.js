import React, {Component} from 'react';
import Header from './components/header';
import NavBar from './components/navBar';
import Content from './components/content';
import './App.css';

class App extends Component{

  state={
    radios: [0,0,0,0,0,0,0,0],
    topButton: [1,0,0,0],
    list: [],
    isLoaded: false,
    search: ''
  }; 

  updateSearch= (event) =>{
      this.setState({
          search:  event.target.value
      });
  }
  componentDidMount = () =>{
    fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        list: json
      })
    });
  }
  handleEvent=(event) =>{
    let radios= [0,0,0,0,0,0,0,0];
    radios[event.target.value]=1;
    this.setState({
        radios: radios
    });
  };
  
  handleEventTopButton= (event) =>{
    let topButton=[0,0,0,0];
    topButton[event.target.value]=1;
    this.setState({
        topButton: topButton
    });
  };
  

  render(){
    if(this.state.isLoaded){
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
  
            {this.state.radios[3]===1 ? <Content 
              radios={this.state.radios}
              onEventTopButton={this.handleEventTopButton}
              topButton={this.state.topButton}
              onUpdateSearch={this.updateSearch}
              list={this.state.list}
              isLoaded={this.state.isLoaded}
              search={this.state.search}
              /> : null
            }
          </div>
        </div>
      );
    }else{
      return <h3>loading</h3>;
    }
  }
      
    
}

export default App;
