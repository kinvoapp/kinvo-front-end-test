import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as SearchSvg} from '../../assets/search.svg';
import  infoSvg  from '../../assets/info.svg';
import IncomeClass from '../IncomeClass';
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
                

            <div className={styles.assets}>

                <div className={styles.assetType}>
                    <div className={styles.titleName}>
                        <h1 className={styles.subtitle}>TÍTULO</h1>
                        <img src={infoSvg} alt="info" />
                    </div>
                    <div className={styles.assetsInfo}>
                        <h2>Tesouro IPCA + com juros semestrais 2020 (ntnb)</h2>
                        <div className={styles.class}>
                            <h1 className={styles.subtitle}>CLASSE</h1>
                            <p>Tesouro Direto</p>
                        </div>
                    </div>
                </div>
                <div className={styles.assetType}>
                    <div className={styles.titleName}>
                        <h1 className={styles.subtitle}>MINHA POSIÇÃO</h1>
                        <img src={infoSvg} alt="info" />
                    </div>
                    <div className={styles.assetsInfo}>
                        <h2>Tesouro IPCA + com juros semestrais 2020 (ntnb)</h2>
                        <div className={styles.class}>
                            <h1 className={styles.subtitle}>CLASSE</h1>
                            <p>Tesouro Direto</p>
                        </div>
                    </div>
                </div>
                <div className={styles.assetType}>
                    <div className={styles.titleName}>
                        <h1 className={styles.subtitle}>VENCIMENTO</h1>
                        <img src={infoSvg} alt="info" />
                    </div>
                    <div className={styles.assetsInfo}>
                        <h2>Tesouro IPCA + com juros semestrais 2020 (ntnb)</h2>
                        <div className={styles.class}>
                            <h1 className={styles.subtitle}>CLASSE</h1>
                            <p>Tesouro Direto</p>
                        </div>
                    </div>
                </div>
            </div>
            <IncomeClass/>
        </div>
    )
}

