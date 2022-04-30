import { LogNav } from "./style";
import logo from '../../assets/ClassesDeAtivos-RendaFixa/Group 11770.svg';
import { CardTopMenu } from "../CardTopMenu";

export const TopMenu = ()=> {
    return (
        <LogNav>
            <img id="logo" src={logo} alt="">
            </img>
            <ul id="TopMenu">
                    <li>
                        <CardTopMenu/>
                    </li>
            </ul>
        </LogNav>
    )
};