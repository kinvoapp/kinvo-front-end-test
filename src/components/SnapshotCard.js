import React from 'react';
import '../components/SnapshotCard.css';

function SnapshotCard({ label, symbol, value }) {
    const currencyValue = (
        <p className="card-info">R$ { value }</p>
    );
    const percentualValue = (
        <p className="card-info">{ value }%</p>
    );
    return (
        <article className="card">
            <p className="card-label">{ label }</p>
            { symbol === 'currency' ? currencyValue : percentualValue }
        </article>
    );
}

export default SnapshotCard;
