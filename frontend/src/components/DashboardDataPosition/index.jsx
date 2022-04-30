import information from '../../assets/icones/information.svg'

import {
    Classification,
    DataPosition,
    DataPositionInfo1,
    DataPositionInformations,
    DataTitleInfo1,
} from "./styles";

export function DashboardDataPosition({data}){
    const {
        valueApplied,
        equity,
        profitability,
        portfolioPercentage,
        indexerValue,
        percentageOverIndexer,
    } = data.position

    return(
        <DataPosition>
            <Classification>
                Minha posição 
                <img src={information} alt="" />
            </Classification>

            <DataPositionInformations>
                <DataTitleInfo1>
                    <p>Valor invest.</p>
                    <DataPositionInfo1>
                        <p>{valueApplied}</p>
                    </DataPositionInfo1>
                </DataTitleInfo1>

                <DataTitleInfo1>
                    <p>Saldo bruto</p>
                    <DataPositionInfo1>
                        <p>{equity}</p>
                    </DataPositionInfo1>
                </DataTitleInfo1>

                <DataTitleInfo1>
                    <p>Rent.</p>
                    <DataPositionInfo1>
                        <p>{`${profitability}%`}</p>
                    </DataPositionInfo1>
                </DataTitleInfo1>

                <DataTitleInfo1>
                    <p>% da cart.</p>
                    <DataPositionInfo1>
                        <p>{`${portfolioPercentage}%`}</p>
                    </DataPositionInfo1>
                </DataTitleInfo1>

                <DataTitleInfo1>
                    <p>cdi</p>
                    <DataPositionInfo1>
                        <p>{indexerValue}</p>
                    </DataPositionInfo1>
                </DataTitleInfo1>
                
                <DataTitleInfo1>
                    <p>Sobr cdi</p>
                    <DataPositionInfo1>
                        <p>{percentageOverIndexer}</p>
                    </DataPositionInfo1>
                </DataTitleInfo1>
                
            </DataPositionInformations>
        </DataPosition>
    )
}
