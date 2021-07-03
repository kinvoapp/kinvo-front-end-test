import React, { cloneElement, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as SearchSvg} from '../../assets/search.svg';
import  infoSvg  from '../../assets/info.svg';
import IncomeClass from '../IncomeClass';
import api from '../../Services/api';

export default function Portfolio ({apiData}) {
    const [datas, setDatas] = useState(apiData);
    const [option, setOption] = useState('default');

    const handleChange = (e) => {  
        setDatas(apiData.filter(item => 
            item.fixedIncome.name.toLowerCase().includes(e.target.value.toLowerCase()) ? item.fixedIncome.name.toLowerCase().includes(e.target.value.toLowerCase()) : item.fixedIncome.bondType.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    const handleOption = (e) => {
        let optionSelected = e.target.value;
        setOption(optionSelected);
        if (optionSelected === 'due') { 
            setDatas(apiData.sort(function(a,b) {
                if(a.due.daysUntilExpiration < b.due.daysUntilExpiration) return -1
                if(a.due.daysUntilExpiration > b.due.daysUntilExpiration) return 1
                if(a.due.daysUntilExpiration === b.due.daysUntilExpiration) return 0
            }))
        } else if (optionSelected === 'equity') {
            setDatas(apiData.sort(function(a,b) {
                if(a.position.equity < b.position.equity) return 1
                if(a.position.equity > b.position.equity) return -1
                if(a.position.equity === b.position.equity) return 0
            }))
        } else if (optionSelected === 'valueapplied') {
            setDatas(apiData.sort(function(a,b) {
                if(a.position.valueApplied < b.position.valueApplied) return 1
                if(a.position.valueApplied > b.position.valueApplied) return -1
                if(a.position.valueApplied === b.position.valueApplied) return 0
            }))
        } else if (optionSelected === 'portfolioPercentage') {
            setDatas(apiData.sort(function(a,b) {
                if(a.position.portfolioPercentage < b.position.portfolioPercentage) return 1
                if(a.position.portfolioPercentage > b.position.portfolioPercentage) return -1
                if(a.position.portfolioPercentage === b.position.portfolioPercentage) return 0
            }))
        } else if (optionSelected === 'directTreasure') {
            setDatas(apiData.filter(item => {
                return item.fixedIncome.bondType.toLowerCase().includes('tesouro direto')
            }))
        } else if (optionSelected === 'fixedIncome') {
            setDatas(apiData.filter(item => {
                return item.fixedIncome.bondType.toLowerCase().includes('renda fixa')
            }))
        } else {
            setDatas(apiData)
        }
    }
    return (
        <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Minhas Rendas Fixas</h1>
                    <form action="" className={styles.form}>
                        <select name="Ordenar por" id="select" className={styles.select} onChange={(e) => handleOption(e)}>
                            <option value="default">Ordenar por</option>
                            <option value="due">Vencimento</option>
                            <option value="valueapplied">Valor investido</option>
                            <option value="equity">Saldo bruto</option>
                            <option value="portfolioPercentage">% da Carteira</option>
                            <option value="directTreasure">Tesouro direto</option>
                            <option value="fixedIncome">Renda fixa</option>
                        </select>
                        <div className={styles.input}>
                            <button><SearchSvg stroke='var(--grey)' height='20px'/></button>
                            <input type="search" onChange={(e) => handleChange(e)}/>
                        </div>
                    </form>
                </header> 
                <div>
                    {datas.map((item, index) => (<IncomeClass key={index} item={item}/>))}
                </div>
        </div>
    )
}

