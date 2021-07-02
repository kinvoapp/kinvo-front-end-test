import React from 'react';
import styles from './styles.module.scss';
import Statistics from '../Statistics';
import Portfolio from '../Portfolio';
export default function Main () {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Renda Fixa</h1>
            <div className={styles.list}>
                <Statistics title='SALDO BRUTO'>R$ 207.653,10</Statistics>
                <Statistics title='VALOR APLICADO'>R$ 170.025,64</Statistics>
                <Statistics title='RESULTADO'>R$ 37.638,46</Statistics>
                <Statistics title='RENTABILIDADE'>25,08%</Statistics>
                <Statistics title='CDI'>23,68%</Statistics>
                <Statistics title='% SOBRE CDI'>320%</Statistics>
            </div>
            <div className={styles.chart}>
                <Portfolio/>
            </div>

        </main>
    )
}