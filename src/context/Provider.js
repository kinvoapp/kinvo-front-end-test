import React, { useState } from 'react';
import App from '../App';
import AppContext from './AppContext';

function Provider({ children }) {
    const [stateA, setStateA] = useState('initialStateA');

    const contextValue = {
        stateA,
    };

    return (
        <AppContext.Provider value={ contextValue }>
            { children }
        </AppContext.Provider>
    );
}

export default Provider;
