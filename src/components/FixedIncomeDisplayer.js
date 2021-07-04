import React, { useContext } from 'react';
import FixedIncomeCard from './FixedIncomeCard';
import AppContext from '../context/AppContext';
import '../components/FixedIncomeDisplayer.css';

function FixedIncomeDisplayer() {
    const { snapshotByProduct, isFetching } = useContext(AppContext);
    const renderFixedIncomes = () => (
        snapshotByProduct.map((income, index) => (
            <FixedIncomeCard key={ index } data={ income } />
        ))
    );
    return (
        <section className="income-displayer">
            { isFetching ? <div>Loading...</div> : renderFixedIncomes() }
        </section>
    );
}

export default FixedIncomeDisplayer;
