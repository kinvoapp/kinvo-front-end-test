import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Statistics from '../Statistics';
import Portfolio from '../Portfolio';
import api from '../../Services/api';
import {parseMoney, parsePercent } from '../../utils/format';
export default function Main () {
    const [snapshotByPortfolio, setSnapshotByPortfolio] = useState(null);
    const [snapshotByProduct, setSnapshotByProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getApi = async () => {
            const { data: { data: data }} = await api.get('getFixedIncomeClassData');
            setSnapshotByPortfolio(data.snapshotByPortfolio);
            setSnapshotByProduct(data.snapshotByProduct);

            setLoading(false)
        }   
        getApi();

    }, [])

    if (loading) {
        return <div> </div>
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Renda Fixa</h1>
            <div className={styles.list}>
                <Statistics title='SALDO BRUTO'>{parseMoney(snapshotByPortfolio.equity)}</Statistics>
                <Statistics title='VALOR APLICADO'>{parseMoney(snapshotByPortfolio.valueApplied)}</Statistics>
                <Statistics title='RESULTADO'>{parseMoney(snapshotByPortfolio.equityProfit)}</Statistics>
                <Statistics title='RENTABILIDADE'>{parsePercent(snapshotByPortfolio.percentageProfit, 2)}</Statistics>
                <Statistics title='CDI'>{parsePercent(snapshotByPortfolio.indexerValue, 2)}</Statistics>
                <Statistics title='% SOBRE CDI'>{parsePercent(snapshotByPortfolio.percentageOverIndexer)}</Statistics>
            </div>
            <div className={styles.chart}>
                <Portfolio apiData={snapshotByProduct}/>
            </div>

        </main>
    )
}