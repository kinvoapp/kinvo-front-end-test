import React, { Component } from 'react';

// COMPONENTS
import Screen from './Components/Screen/Screen'

// STYLES
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Screen></Screen>
            </div>
        )
    }
}

export default App;
