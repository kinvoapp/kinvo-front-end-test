import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import About from './components/About';
import Resources from './components/Resources';

class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <About></About>
                <Resources></Resources>
            </React.Fragment>
        );
    }
}

export default Landing;
