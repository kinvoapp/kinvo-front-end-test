import { FixedAnnuitiesItem } from "./style";
import Excla from '../../assets/ClassesDeAtivos-RendaFixa/Group 12089.svg'

export const FixedAnnuity=({values})=> {
    
    return (
        <FixedAnnuitiesItem>
            <div className="titleAnnuities">
                <div className="headTitle"><span>Titulo</span><img src={Excla} alt=""/></div>
                <div className="data">
                    <div className="subData"><p className="name">{values.fixedIncome.name}</p></div>
                    <div className="subData">
                        <p className="subTitle">Classe</p>
                        <p className="typeclass">{values.fixedIncome.bondType}</p>
                    </div>
                </div>
            </div>
            <div className="myPosition">
                <div className="headMyPosition"><span>Resultado</span><img src={Excla} alt=""/></div>
                <div className="data">
                    <div className="subData">
                        <p className="subTitle">Valor Inves.</p>
                        <p className="value">{values.position.valueApplied}</p>
                    </div>
                    <div className="subData">
                        <p className="subTitle">Saldo Bruto.</p>
                        <p className="value">{values.position.equity}</p>
                    </div>
                    <div className="subData">
                        <p className="subTitle">Rent.</p>
                        <p className="value">{values.position.profitability}%</p>
                    </div>
                    <div className="subData">
                        <p className="subTitle">% da carta</p>
                        <p className="value">{values.position.portfolioPercentage}%</p>
                    </div>
                    <div className="subData">
                        <p className="subTitle">cdi</p>
                        <p className="value">{values.position.indexerValue}</p>
                    </div>
                    <div className="subData">
                        <p className="subTitle">Sobre CDI</p>
                        <p className="value">{values.position.percentageOverIndexer}</p>
                    </div>
                </div>
            </div>
            <div className="dueDate">
                <div className="headDueDate"><span>Vencimento</span><img src={Excla} alt=""/></div>
                <div className="data">
                    <div className="subData">
                        <p className="subTitle">data venc.</p>
                        <p className="value">{values.due.date}</p>
                    </div>
                    <div className="subData">
                        <p className="subTitle">Dias até venc.</p>
                        <p className="value">{values.due.daysUntilExpiration}</p>
                    </div>
                </div>
            </div>
        </FixedAnnuitiesItem>
    )
};
