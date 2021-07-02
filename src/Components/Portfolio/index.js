import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as SearchSvg} from '../../assets/search.svg';
import  infoSvg  from '../../assets/info.svg';
import IncomeClass from '../IncomeClass';
import api from '../../Services/api';

export default function Portfolio ({apiData}) {
    let [datas, setDatas] = useState(apiData);

    const handleChange = (e) => {
        setDatas(apiData.filter(item => item.fixedIncome.name.indexOf(e.target.value) > -1))
    }

    return (
        <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Minhas Rendas Fixas</h1>
                    <form action="" className={styles.form}>
                        <select name="Ordenar por" id="" className={styles.select} defaultValue=''>
                            <option value="" disabled hidden>Ordenar por</option>
                            <option value="" disabled hidden>Ordenar por</option>
                            <option value="" disabled hidden>Ordenar por</option>
                            <option value="" disabled hidden>Ordenar por</option>
                        </select>
                        <div className={styles.input}>
                            <button><SearchSvg stroke='var(--grey)' height='20px'/></button>
                            <input type="search" onChange={(e) => handleChange(e)}/>
                        </div>
                    </form>
                </header> 
                <div>
                    {datas.map((item, index) => (<IncomeClass key={index} item={item} id={index}/>))}
                </div>
        </div>
    )
}

