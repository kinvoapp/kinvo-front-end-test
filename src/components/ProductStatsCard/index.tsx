import React from 'react'
import { dueType, fixedIncomeType, positionType } from '../../interfaces/apiResponse';
import infoSVG from '../../assets/infoSVG.svg'
import { ProductStatsCard } from './styles';

interface Iprops {
    title: string;
    dataFixed?: fixedIncomeType;
    dataDue?: dueType;
    dataPosition?: positionType;
}


function SnapshotProductStats(props: Iprops) {
    const { title, dataFixed, dataDue, dataPosition } = { ...props }

    const labelColor = dataFixed ? '#8A51BA' : dataPosition ? '#38BFA0' : dataDue ? '#008DCB' : 'black';
    return (
        <ProductStatsCard color={labelColor}>
            <div className='card_top'>
                <p>{title}</p>
                <img alt='info' src={infoSVG} />               
            </div>
            {dataFixed ? (
                <div className='card_bottom'>
                    <h4>
                        {dataFixed.name}
                    </h4>
                    <div>
                        <p>CLASSE</p>
                        <h3>{dataFixed.bondType}</h3>
                    </div>
                </div>
            ) : dataDue ? (
                <div className='card_bottom'>
                    <div>
                        <p>DATA VENC</p>
                        <h3>{dataDue.date}</h3>
                    </div>
                    <div>
                        <p>DIAS ATÉ VENC</p>
                        <h3>{dataDue.daysUntilExpiration}</h3>
                    </div>
                </div>
            ) : dataPosition ? (
                <div className='card_bottom'>
                    <div>
                        <p>VALOR INVES</p>
                        <h3>{dataPosition.valueApplied.toLocaleString()}</h3>
                    </div>
                    <div>
                        <p>SALDO BRUTO</p>
                        <h3>{dataPosition.equity.toLocaleString()}</h3>
                    </div>
                    <div>
                        <p>RENT</p>
                        <h3>{dataPosition.profitability.toLocaleString()} %</h3>
                    </div>
                    <div>
                        <p>% DA CART</p>
                        <h3>{dataPosition.portfolioPercentage} %</h3>
                    </div>
                    <div>
                        <p>CDI</p>
                        <h3>{dataPosition.indexerValue}</h3>
                    </div>
                    <div>
                        <p>SOBRE CDI</p>
                        <h3>{dataPosition.percentageOverIndexer}</h3>
                    </div>
                </div>
            ) : <p></p>}
        </ProductStatsCard>
    );
};

export default SnapshotProductStats