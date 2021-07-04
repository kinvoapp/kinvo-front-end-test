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
            <h3 className="title-label">MINHA POSIÇÃO</h3>
            <div className="position-container">
                <div className="position-info">
                    <h4>VALOR INVES.</h4>
                    <p>{ valueApplied.toLocaleString('pt-BR') }</p>
                </div>
                <div className="position-info">
                    <h4>SALDO BRUTO</h4>
                    <p>{ equity.toLocaleString('pt-BR') }</p>
                </div>
                <div className="position-info">
                    <h4>RENT.</h4>
                    <p>{ profitability }%</p>
                </div>
                <div className="position-info">
                    <h4>% DA CART.</h4>
                    <p>{ portfolioPercentage }%</p>
                </div>
                <div className="position-info">
                    <h4>{ indexerLabel }</h4>
                    <p>{ parseFloat(indexerValue) }</p>
                </div>
                <div className="position-info">
                    <h4>SOBRE { indexerLabel }</h4>
                    <p>{ parseInt(percentageOverIndexer) }</p>
                </div>

            </div>
        </div>
    );
}

export default FixedIncomePositionTag;
