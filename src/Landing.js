import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import About from './components/About';

class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <About></About>
            </React.Fragment>
        );
    }
}

export default Landing;
