import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import About from './components/About';
import Resources from './components/Resources';
import Web from './components/Web';

class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <About></About>
                <Resources></Resources>
                <Web></Web>
            </React.Fragment>
        );
    }
}

export default Landing;
