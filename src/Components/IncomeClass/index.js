import React from 'react';
import styles from './styles.module.scss';
import  infoSvg  from '../../assets/info.svg';
import { parsePercent, parseMoney } from '../../utils/format';
export default function IncomeClass ({item, id}) {
    const { fixedIncome, due, position } = item;
    
    return (
        <div className={styles.assets} id={id}>
            <div className={styles.assetType}>
                <div className={styles.titleName}>
                    <h1 className={styles.subtitle}>TÍTULO</h1>
                    <img src={infoSvg} alt="info" />
                </div>
                <div className={styles.assetsInfo}>
                    <h2 id='IncomeName'>{fixedIncome.name}</h2>
                    <div className={styles.class}>
                        <h1 className={styles.subtitle}>CLASSE</h1>
                        <p>{fixedIncome.bondType}</p>
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
                                <p>{parseMoney(position.valueApplied)}</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>SALDO BRUTO</h1>
                                <p>{parseMoney(position.equity)}</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>RENT.</h1>
                                <p>{parsePercent(position.profitability, 2)}</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>% DA CART.</h1>
                                <p>{parsePercent(position.portfolioPercentage, 2)}</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>CDI</h1>
                                <p>{parsePercent(position.indexerValue)}</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>SOBRE CDI</h1>
                                <p>{parsePercent(position.percentageOverIndexer)}</p>
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
                                <p>{due.date.replace(/\//g, '.')}</p>
                            </li>
                            <li>
                                <h1 className={styles.subtitle}>DIAS ATÉ VENC.</h1>
                                <p>{due.daysUntilExpiration}</p>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}