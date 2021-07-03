import React, { useState, useEffect } from 'react';
import fetchInfo from '../services/apiServices';
import AppContext from './AppContext';

function Provider({ children }) {
    const [portfolioData, setPortfolioData] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    async function fetchPortfolioInfo() {
        const baseApi = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/';
        const endpoint = 'getFixedIncomeClassData';
        const requestResult = await fetchInfo(baseApi, endpoint);
        setPortfolioData(requestResult);
        setIsFetching(false);
        console.log(requestResult);
    }

    useEffect(() => {
        fetchPortfolioInfo();
    }, []);

    const contextValue = {
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
