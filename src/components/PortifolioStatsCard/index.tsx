import React from 'react'
import { PortfolioStatsCard } from './styles';

export interface Iprops {
    title: string;
    content: string;
}


function SnapshotPortfolioStats(props: Iprops) {
    const { title, content } = { ...props }
    return (
        <>
            <PortfolioStatsCard>
              <p>{title.toUpperCase()}</p>
              <h3>{content}</h3>
            </PortfolioStatsCard>
        </>
    );
};

export default SnapshotPortfolioStats