import React, { Component } from 'react';
import Hero from './components/Hero';
import './styles.scss';

class About extends Component {
    render() {
        return (
            <section id='about'>
                <Hero></Hero>
            </section>
        );
    }
}

export default About;
