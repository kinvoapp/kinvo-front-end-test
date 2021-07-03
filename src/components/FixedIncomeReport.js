import React, { useContext } from 'react';
import FixedIncomeSnapshot from './FixedIncomeSnapshot';
import './FixedIncomeReport.css';

function FixedIncomeReport() {
    return (
        <section>
            <h2>Renda Fixa</h2>
            <FixedIncomeSnapshot />
        </section>
    );
}

export default FixedIncomeReport;
