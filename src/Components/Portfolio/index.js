import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as SearchSvg} from '../../assets/search.svg';
import  infoSvg  from '../../assets/info.svg';
import IncomeClass from '../IncomeClass';

export default function Portfolio ({apiData}) {

    return (
        <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Minhas Rendas Fixas</h1>
                    <form action="" className={styles.form}>
                        <select name="Ordenar por" id="" className={styles.select} defaultValue=''>
                            <option value="" disabled hidden>Ordenar por</option>
                        </select>
                        <div className={styles.input}>
                            <button><SearchSvg stroke='var(--grey)' height='20px'/></button>
                            <input type="text"/>
                        </div>
                    </form>
                </header> 
            {apiData.map((item, index) => (<IncomeClass key={index} item={item}/>))}
        </div>
    )
}

