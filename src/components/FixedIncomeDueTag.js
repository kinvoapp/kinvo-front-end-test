import React from 'react';
import './FixedIncomeDueTag.css';

function FixedIncomeDueTag({ due }) {
    const { date, daysUntilExpiration } = due;
    return (
        <div className="duetag-container">
            <p>VENCIMENTO</p>
            <div className="due-container">
                <div className="due-info">
                    <p>DATA VENC.</p>
                    <p>{ date }</p>
                </div>
                <div className="due-info">
                    <p>DIAS ATÉ VENC.</p>
                    <p>{ daysUntilExpiration }</p>
                </div>
            </div>
        </div>
    );
}

export default FixedIncomeDueTag;
