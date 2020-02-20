import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Section from './components/layout/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex-container">
          <Sidebar />
          <Section />
        </div>
      </div>
    );
  }
}

export default App;
