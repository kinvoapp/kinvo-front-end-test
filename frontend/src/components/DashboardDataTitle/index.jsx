import information from '../../assets/icones/information.svg'

import {
    Classe1,
    Classification,
    DataTitle,
    DataTitleInfo,
    DataTitleInfo1,
    DataTitleInformations,
} from "./styles";

export function DashboardDataTitle({data}){
    const {name,bondType} = data.fixedIncome

    return(
        <DataTitle>
            <Classification>
                Título 
                <img src={information} alt="" />
            </Classification>

            <DataTitleInformations>
                <DataTitleInfo>
                    <p>{name}</p>
                </DataTitleInfo>
                <DataTitleInfo1>
                    <p>classe</p>
                    <Classe1>
                        <p>{bondType}</p>
                    </Classe1>
                </DataTitleInfo1>
            </DataTitleInformations>
        </DataTitle>
    )
}