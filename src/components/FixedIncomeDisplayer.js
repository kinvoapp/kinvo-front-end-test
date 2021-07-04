import React, { useState, useContext, useEffect } from 'react';
import FixedIncomeCard from './FixedIncomeCard';
import AppContext from '../context/AppContext';
import '../components/FixedIncomeDisplayer.css';

function FixedIncomeDisplayer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { snapshotByProduct, isFetching } = useContext(AppContext);
    
    useEffect(() => {
        setSearchResults(snapshotByProduct);
    }, [isFetching]);
    
    useEffect(() => {
        const results = snapshotByProduct
            .filter((product) => {
                const { fixedIncome: { name } } = product;
                const lowerCaseProductName = name.toLowerCase();
                const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
                return lowerCaseProductName.includes(lowerCaseSearchTerm);
            });
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const renderFixedIncomes = () => (
        searchResults.map((income, index) => (
            <FixedIncomeCard key={ index } data={ income } />
        ))
    );

    return (
        <section className="income-displayer">
            <div className="income-displayer-header">
                <p>Minhas Rendas Fixas</p>
                <input
                    className="search-input"
                    type="text"
                    value={ searchTerm }
                    placeholder="Busca"
                    onChange={ (event) => handleChange(event) }
                />

            </div>
            { isFetching ? <div>Loading...</div> : renderFixedIncomes() }
        </section>
    );
}

export default FixedIncomeDisplayer;
