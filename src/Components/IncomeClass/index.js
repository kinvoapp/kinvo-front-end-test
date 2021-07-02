import React from 'react';
import styles from './styles.module.scss';
import  infoSvg  from '../../assets/info.svg';
export default function IncomeClass () {
    return (
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
                    <h1 className={styles.subtitle}>RESULTADO</h1>
                    <img src={infoSvg} alt="info" />
                </div>
                <div className={styles.assetsInfo}>
                    <div className={styles.classResult}>
                        <ul>
                            <li>
                                <h1 className={styles.subtitle}>VALOR INVES.</h1>
                                <p>1.003,00</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>SALDO BRUTO</h1>
                                <p>1.124,00</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>RENT.</h1>
                                <p>48,55%</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>% DA CART.</h1>
                                <p>5,33%</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>CDI</h1>
                                <p>1,24</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>SOBRE CDI</h1>
                                <p>118</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.assetType}>
                <div className={styles.titleName}>
                    <h1 className={styles.subtitle}>VENCIMENTO</h1>
                    <img src={infoSvg} alt="info" />
                </div>
                <div className={styles.assetsInfo}>
                    <div className={styles.classVenc}>
                        <ul>
                            <li>
                                <h1 className={styles.subtitle}>DATA VENC.</h1>
                                <p>15.05.2019</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>DIAS ATÉ VENC.</h1>
                                <p>5762</p>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}