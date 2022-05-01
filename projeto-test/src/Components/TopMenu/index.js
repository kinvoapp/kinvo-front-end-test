import { LogNav } from "./style";
import logo from '../../assets/ClassesDeAtivos-RendaFixa/Group 11770.svg';
import IconMenu from '../../assets/ClassesDeAtivos-RendaFixa/Group 11761.svg';
import IconSB from '../../assets/ClassesDeAtivos-RendaFixa/Group 11763.svg';
import IconVA  from '../../assets/ClassesDeAtivos-RendaFixa/Group 11765.svg';
import IconRent  from '../../assets/ClassesDeAtivos-RendaFixa/Group 11767.svg';
import IconCart  from '../../assets/ClassesDeAtivos-RendaFixa/Group 11772.svg';
import { CardTopMenu } from "../CardTopMenu";

export const TopMenu = ()=> {
    const data = [{title:'saldo bruto',value:'130.521.230,02',icon:IconSB},
                    {title:'valor aplicado',value:'521.230,02',icon:IconVA},
                    {title:'rentabiidade',value:'2,34',icon:IconRent},
                    {title:'carteira',value:'Minha Carteira',icon:IconCart}
                    ]

    return (
        <LogNav>
            <img id="logo" src={logo} alt="">
            </img>
            <ul id="TopMenu">
                        {
                            data.map((e,i)=><li key={i}>
                                <CardTopMenu values={e}/>
                            </li>)
                        }            
                    <img id='IconMenu' src={IconMenu} alt=''></img>                    
            </ul>
        </LogNav>
    )
};