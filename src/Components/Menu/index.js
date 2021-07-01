import React, { useState } from 'react';
import styles from './styles.module.scss';
import Option from '../Option';
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
        <div className={styles.container}>
            <Option title={'Resumo Da Carteira'}><Resumo stroke='var(--white)'/></Option>
            <Option title={'Meus Produtos'}><Products stroke='var(--white)'/></Option>
            <Option title={'Meus Proventos'}><Sign stroke='var(--white)'/></Option>
            <Option title={'Classe de Ativos'}><Atives stroke='var(--white)'/></Option>
            <Option title={'Rentabilidade Real'}><Rent stroke='var(--white)'/></Option>
            <Option title={'Projeção de Carteira'}><Projection stroke='var(--white)'/></Option>
            <Option title={'Risco x Retorno'}><Risk stroke='var(--white)'/></Option>
            <Option title={'Cobertura do FGC'}><Shield stroke='var(--white)'/></Option>
        </div>
    )
}