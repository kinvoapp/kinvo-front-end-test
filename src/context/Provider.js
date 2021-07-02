import React, { useState, useEffect } from 'react';
import fetchPortfolioInfo from '../services/apiServices';
import AppContext from './AppContext';

function Provider({ children }) {
    const [stateA, setStateA] = useState('initialStateA');
    const [portfolioData, setPortfolioData] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    async function fetchInfo() {
        setIsFetching(true);
        const requestResult = await fetchPortfolioInfo();
        setPortfolioData(requestResult);
        setIsFetching(false);
        console.log(requestResult);
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const contextValue = {
        stateA,
        portfolioData,
        isFetching,
    };

    return (
        <AppContext.Provider value={contextValue}>
            { children}
        </AppContext.Provider>
    );
}

export default Provider;
