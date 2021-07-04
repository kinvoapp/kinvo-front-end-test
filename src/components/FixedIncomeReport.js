import React, { useContext } from 'react';
import FixedIncomeSnapshot from './FixedIncomeSnapshot';
import FixedIncomeDisplayer from './FixedIncomeDisplayer';
import './FixedIncomeReport.css';

function FixedIncomeReport() {
    return (
        <section>
            <h2>Renda Fixa</h2>
            <FixedIncomeSnapshot />
            <FixedIncomeDisplayer />
        </section>
    );
}

export default FixedIncomeReport;
