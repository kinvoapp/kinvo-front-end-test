import React from 'react';
import './styles.css';
import SaldoBruto from './components/SaldoBruto';
import ValorAplicado from './components/ValorAplicado';
import GanhoDeCapital from './components/GanhoDeCapital';
import TotalDistribuidos from './components/TotalDistribuidos';
import Yield from './components/Yield';

const ClassAnalysis = () => (

  <nav className="classAnalysis">

    <SaldoBruto />
    <ValorAplicado />
    <GanhoDeCapital />
    <TotalDistribuidos />
    <Yield />

  </nav>

);

export default ClassAnalysis;
