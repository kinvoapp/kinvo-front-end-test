import React, { useState, useEffect } from 'react';
import fetchInfo from '../services/apiServices';
import AppContext from './AppContext';

function Provider({ children }) {
    const [snapshotByPortfolio, setSnapshotByPortfolio] = useState({});
    const [
        dailyEquityByPortfolioChartData,
        setDailyEquityByPortfolioChartData
    ] = useState([]);
    const [snapshotByProduct, setSnapshotByProduct] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    async function fetchPortfolioInfo() {
        const baseApi = 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/';
        const endpoint = 'getFixedIncomeClassData';
        const requestResult = await fetchInfo(baseApi, endpoint);
        setSnapshotByPortfolio(requestResult.data.snapshotByPortfolio);
        setDailyEquityByPortfolioChartData(
            requestResult.data.dailyEquityByPortfolioChartData
        );
        setSnapshotByProduct(requestResult.data.snapshotByProduct);
        setIsFetching(false);
    }

    useEffect(() => {
        fetchPortfolioInfo();
    }, []);

    const contextValue = {
        snapshotByPortfolio,
        dailyEquityByPortfolioChartData,
        snapshotByProduct,
        isFetching,
    };

    return (
        <AppContext.Provider value={contextValue}>
            { children }
        </AppContext.Provider>
    );
}

export default Provider;
