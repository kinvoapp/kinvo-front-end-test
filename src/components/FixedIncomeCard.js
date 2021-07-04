import React from 'react';
import FixedIncomeNameTag from './FixedIncomeNameTag';
import FixedIncomePositionTag from './FixedIncomePositionTag';
import FixedIncomeDueTag from './FixedIncomeDueTag';
import './FixedIncomeCard.css';

function FixedIncomeCard({ data }) {
    const { due, fixedIncome, position } = data;
    return (
        <article className="fixed-income-card-container">
            <FixedIncomeNameTag fixedIncome={ fixedIncome }/>
            <FixedIncomePositionTag position={ position }/>
            <FixedIncomeDueTag due={ due }/>
            
            
        </article>
    );
}

export default FixedIncomeCard;
