import React from 'react';
import './styles.css';
import InputAcoes from './components/InputAcoes';
import InputBitcoins from './components/InputBitcoins';
import InputDebentures from './components/InputDebentures';
import InputFundos from './components/InputFundos';

const ChooseInputs = () => {
    return(
        
        <main className="chooseInputs">
    
            <InputAcoes/>
            <InputBitcoins/>           
            <InputDebentures/>  
            <InputFundos/>
    
        </main>
    )
}

export default ChooseInputs;