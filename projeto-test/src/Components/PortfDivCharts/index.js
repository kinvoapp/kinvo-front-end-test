import {Charts} from './style';
import { PizzaChart } from '../PizzaChart';

export const PortDivChats = ()=>{
    return (
        <Charts>
            <PizzaChart title={"Divisão de carteira por tipos"}></PizzaChart>
            <PizzaChart title={"Divisão de carteira por títulos"}></PizzaChart>
        </Charts>
    )
}