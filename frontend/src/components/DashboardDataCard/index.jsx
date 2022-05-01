import {
    Classe1,
    Classification,
    DataExpiration,
    DataExpirationInfo1,
    DataPosition,
    DataPositionInfo1,
    DataPositionInformations,
    DataTitle,
    DataTitleInfo,
    DataTitleInfo1,
    DataTitleInformations,
} from "./styles";

import information from '../../assets/icones/information.svg'

export function DashboardDataCard({data}){
    const {name,bondType} = data.fixedIncome

    const {
        valueApplied,
        equity,
        profitability,
        portfolioPercentage,
        indexerValue,
        percentageOverIndexer,
    } = data.position

    const { date, daysUntilExpiration } = data.due

    return(
        <>
            <DataTitle>
                <Classification>
                    Título 
                    <img src={information} alt="" />
                </Classification>

                <DataTitleInformations>
                    <DataTitleInfo>
                        {name}
                    </DataTitleInfo>
                    <DataTitleInfo1>
                        <p>classe</p>
                        <Classe1>
                            <p>{bondType}</p>
                        </Classe1>
                    </DataTitleInfo1>
                </DataTitleInformations>
            </DataTitle>

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

            <DataExpiration>
                <Classification>
                    Vencimento 
                    <img src={information} alt="" />
                </Classification>

                <DataPositionInformations>
                    <DataTitleInfo1>
                        <p>Data venc.</p>
                        <DataExpirationInfo1>
                            <p>{date}</p>
                        </DataExpirationInfo1>
                    </DataTitleInfo1>
                    
                    <DataTitleInfo1>
                        <p>Dias ate venc.</p>
                        <DataExpirationInfo1>
                            <p>{daysUntilExpiration}</p>
                        </DataExpirationInfo1>
                    </DataTitleInfo1>
                </DataPositionInformations>
            </DataExpiration>
        </>
    )
}