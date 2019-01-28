import React, { Component } from 'react';
import './styles/styles.scss';
import Header from './components/Header';
import About from './components/About';
import Resources from './components/Resources';
import Web from './components/Web';
import Plans from './components/Plans';
import Members from './components/Members';
import Footer from './components/Footer';

class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <About></About>
                <Resources></Resources>
                <Web></Web>
                <Plans></Plans>
                <Members></Members>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Landing;
