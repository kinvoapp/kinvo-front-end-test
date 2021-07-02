import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as SearchSvg} from '../../assets/search.svg'
export default function Portfolio () {
    return (
        <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Minhas Rendas Fixas</h1>
                    <form action="" className={styles.form}>
                        <select name="Ordenar por" id="" className={styles.select}>
                            <option value="" disabled selected hidden>Ordenar por</option>
                        </select>
                        <div className={styles.input}>
                            <button><SearchSvg stroke='var(--grey)' height='20px'/></button>
                            <input type="text"/>
                        </div>
                    </form>
                </header>
                

            <div>

            </div>
        </div>
    )
}

