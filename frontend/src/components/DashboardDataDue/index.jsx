import information from '../../assets/icones/information.svg'

import {
    Classification,
    DataExpiration,
    DataExpirationInfo1,
    DataPositionInformations,
    DataTitleInfo1,
} from "./styles";

export function DashboardDataDue({data}){
    const { date, daysUntilExpiration } = data.due;

    return(
        <DataExpiration>
            <Classification>
                Minha posição 
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
    )
}