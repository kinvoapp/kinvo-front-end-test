import React, { useContext } from 'react';
import './FixedIncomePositionTag.css';

function FixedIncomePositionTag({ position }) {
    const {
        equity,
        indexerLabel,
        indexerValue,
        percentageOverIndexer,
        portfolioPercentage,
        profitability,
        valueApplied,
    } = position;
    return (
        <div className="positiontag-container">
            <p>MINHA POSIÇÃO</p>
            <div className="position-container">
                <div className="position-info">
                    <p>VALOR INVES.</p>
                    <p>{ valueApplied.toLocaleString('pt-BR') }</p>
                </div>
                <div className="position-info">
                    <p>SALDO BRUTO</p>
                    <p>{ equity.toLocaleString('pt-BR') }</p>
                </div>
                <div className="position-info">
                    <p>RENT.</p>
                    <p>{ profitability }%</p>
                </div>
                <div className="position-info">
                    <p>% DA CART.</p>
                    <p>{ portfolioPercentage }%</p>
                </div>
                <div className="position-info">
                    <p>{ indexerLabel }</p>
                    <p>{ parseFloat(indexerValue) }</p>
                </div>
                <div className="position-info">
                    <p>SOBRE { indexerLabel }</p>
                    <p>{ parseInt(percentageOverIndexer) }</p>
                </div>

            </div>
        </div>
    );
}

export default FixedIncomePositionTag;
