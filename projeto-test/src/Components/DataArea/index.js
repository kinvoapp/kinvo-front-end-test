import { DataAreaDiv } from "./style";
import { HeaderDataArea } from "../HeaderDataArea";
import { BondYieldChart } from "../BondYieldChart";
import { MyFixedAnuities } from '../MyFixedAnuities';
import { PortDivChats } from "../PortfDivCharts";

export const DataArea = ()=>{
    return (
        <DataAreaDiv>
            <HeaderDataArea></HeaderDataArea>
            <BondYieldChart></BondYieldChart>
            <MyFixedAnuities></MyFixedAnuities>
            <PortDivChats></PortDivChats>
        </DataAreaDiv>
    )
}