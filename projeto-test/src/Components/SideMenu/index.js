import { SideBarMenu } from "./style";
import { BasicCardSideMenu } from "../BasicCardSideMenu";
import { CardTwoSideMenu } from "../CardTwoSideMenu";
import RCart from '../../assets/ClassesDeAtivos-RendaFixa/Group 12159.svg';
import MProd from '../../assets/ClassesDeAtivos-RendaFixa/Group 12158.svg';
import MProv from '../../assets/ClassesDeAtivos-RendaFixa/Group 12157.svg';
import CAtiv from '../../assets/ClassesDeAtivos-RendaFixa/Group 12160.svg';
import RReal from '../../assets/ClassesDeAtivos-RendaFixa/Group 12156.svg';
import ProjDC from '../../assets/ClassesDeAtivos-RendaFixa/Group 12155.svg';
import Risco from '../../assets/ClassesDeAtivos-RendaFixa/Group 12154.svg';
import Cob from '../../assets/ClassesDeAtivos-RendaFixa/Group 12153.svg';
import IconArrow from '../../assets/ClassesDeAtivos-RendaFixa/Group 10933.svg';

export const SideMenu = ()=> {   

    const itemsMenuSide = [
        {icon:RCart,text:"Resumo da Carteira"},
        {icon:MProd,text:"Meus Produtos"},
        {icon:MProv,text:"Meus Proventos"},
        {icon:CAtiv,text:"Classe de Ativos"},
        {text:"Ação"},
        {text:"Fundo"},
        {text:"Fundo Imobiliário"},
        {text:"Fundo Renda Fixa"},
        {icon:RReal,text:"Rentabilidade Real"},
        {icon:ProjDC,text:"Projeção da Carteira"},
        {icon:Risco,text:"Risco x Retorno"},
        {icon:Cob, text:"Cobertura do FGC"},
    ]


    return (
        <SideBarMenu>
            {
                itemsMenuSide.map((e,i)=> [4,5,6,7].indexOf(i)===-1?
                    <BasicCardSideMenu key={i} values={e} iconArrow={IconArrow}/>
                    :
                    <CardTwoSideMenu key={i} values={e} iconArrow={IconArrow}/>
                )
            }
        </SideBarMenu>
    )
};
