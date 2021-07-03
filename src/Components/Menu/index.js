import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Option from '../Option';
import DropOption from '../DropOption';
import { ReactComponent as Resumo} from '../../assets/remuse.svg';
import { ReactComponent as Sign} from '../../assets/sign.svg';
import { ReactComponent as Atives} from '../../assets/atives.svg';
import { ReactComponent as Rent} from '../../assets/rentabilidade.svg';
import { ReactComponent as Risk} from '../../assets/risk.svg';
import { ReactComponent as Products} from '../../assets/myproducts.svg';
import { ReactComponent as Shield} from '../../assets/shield.svg';
import { ReactComponent as Projection} from '../../assets/projection.svg';
//import { ReactComponent as Ative} from '../../assets/feather.svg';
export default function Menu () {
    return (
        <div className={styles.container} id='menu'>
            <Option title={'Resumo Da Carteira'} icon={<Resumo stroke='var(--white)'/>}></Option>
            <Option title={'Meus Produtos'} icon={<Products stroke='var(--white)'/>}></Option>
            <Option title={'Meus Proventos'} icon={<Sign stroke='var(--white)'/>}></Option>
            <Option title={'Classe de Ativos'} icon={<Atives stroke='var(--white)'/>}>
                    <DropOption>Ação</DropOption>
                    <DropOption>Fundo</DropOption>
                    <DropOption>Fundo Imobiliário</DropOption>
                    <DropOption>Fundo Renda Fixa</DropOption>
            </Option>
            <Option title={'Rentabilidade Real'} icon={<Rent stroke='var(--white)'/>}></Option>
            <Option title={'Projeção de Carteira'} icon={<Projection stroke='var(--white)'/>}></Option>
            <Option title={'Risco x Retorno'} icon={<Risk stroke='var(--white)'/>}></Option>
            <Option title={'Cobertura do FGC'} icon={<Shield stroke='var(--white)'/>}></Option>
        </div>
    )
}