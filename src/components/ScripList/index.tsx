import axios from 'axios';
import { useEffect, useState } from 'react';
import infoIcon from '../../assets/images/infoIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import * as s from './style';

export function ScripList(){

    const [loading, isLoading] = useState(true)
    const [error, setError] = useState('')

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [applied, setApplied] = useState('');
    const [equity, setEquity] = useState('');
    const [profitAbility, setProfitAbility] = useState('');
    const [portfolioPercentage, setPortfolioPercentage] = useState('');
    const [CDI, setCDI] = useState('');
    const [percentageOverIndexer, setPercentageOverIndexer] = useState('');
    const [date, setDate] = useState('');
    const [daysUntilExpiration, setDaysUntilExpiration] = useState('');

    const [name2, setName2] = useState('');
    const [type2, setType2] = useState('');
    const [applied2, setApplied2] = useState('');
    const [equity2, setEquity2] = useState('');
    const [profitAbility2, setProfitAbility2] = useState('');
    const [portfolioPercentage2, setPortfolioPercentage2] = useState('');
    const [CDI2, setCDI2] = useState('');
    const [percentageOverIndexer2, setPercentageOverIndexer2] = useState('');
    const [date2, setDate2] = useState('');
    const [daysUntilExpiration2, setDaysUntilExpiration2] = useState('');

    const [name3, setName3] = useState('');
    const [type3, setType3] = useState('');
    const [applied3, setApplied3] = useState('');
    const [equity3, setEquity3] = useState('');
    const [profitAbility3, setProfitAbility3] = useState('');
    const [portfolioPercentage3, setPortfolioPercentage3] = useState('');
    const [CDI3, setCDI3] = useState('');
    const [percentageOverIndexer3, setPercentageOverIndexer3] = useState('');
    const [date3, setDate3] = useState('');
    const [daysUntilExpiration3, setDaysUntilExpiration3] = useState('');

    const [name4, setName4] = useState('');
    const [type4, setType4] = useState('');
    const [applied4, setApplied4] = useState('');
    const [equity4, setEquity4] = useState('');
    const [profitAbility4, setProfitAbility4] = useState('');
    const [portfolioPercentage4, setPortfolioPercentage4] = useState('');
    const [CDI4, setCDI4] = useState('');
    const [percentageOverIndexer4, setPercentageOverIndexer4] = useState('');
    const [date4, setDate4] = useState('');
    const [daysUntilExpiration4, setDaysUntilExpiration4] = useState('');

    const [name5, setName5] = useState('');
    const [type5, setType5] = useState('');
    const [applied5, setApplied5] = useState('');
    const [equity5, setEquity5] = useState('');
    const [profitAbility5, setProfitAbility5] = useState('');
    const [portfolioPercentage5, setPortfolioPercentage5] = useState('');
    const [CDI5, setCDI5] = useState('');
    const [percentageOverIndexer5, setPercentageOverIndexer5] = useState('');
    const [date5, setDate5] = useState('');
    const [daysUntilExpiration5, setDaysUntilExpiration5] = useState('');

    useEffect(() => {
        axios
          .get(
            'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'
          )
          .then((response) => {
            setName(response.data.data.snapshotByProduct[0].fixedIncome.name);
            setType(response.data.data.snapshotByProduct[0].fixedIncome.bondType);
            setApplied(response.data.data.snapshotByProduct[0].position.valueApplied);
            setEquity(response.data.data.snapshotByProduct[0].position.equity);
            setProfitAbility(response.data.data.snapshotByProduct[0].position.profitability);
            setPortfolioPercentage(response.data.data.snapshotByProduct[0].position.portfolioPercentage);
            setCDI(response.data.data.snapshotByProduct[0].position.indexerValue);
            setPercentageOverIndexer(response.data.data.snapshotByProduct[0].position.percentageOverIndexer)
            setDate(response.data.data.snapshotByProduct[0].due.date);
            setDaysUntilExpiration(response.data.data.snapshotByProduct[0].due.daysUntilExpiration);

            setName2(response.data.data.snapshotByProduct[1].fixedIncome.name);
            setType2(response.data.data.snapshotByProduct[1].fixedIncome.bondType);
            setApplied2(response.data.data.snapshotByProduct[1].position.valueApplied);
            setEquity2(response.data.data.snapshotByProduct[1].position.equity);
            setProfitAbility2(response.data.data.snapshotByProduct[1].position.profitability);
            setPortfolioPercentage2(response.data.data.snapshotByProduct[1].position.portfolioPercentage);
            setCDI2(response.data.data.snapshotByProduct[1].position.indexerValue);
            setPercentageOverIndexer2(response.data.data.snapshotByProduct[1].position.percentageOverIndexer)
            setDate2(response.data.data.snapshotByProduct[1].due.date);
            setDaysUntilExpiration2(response.data.data.snapshotByProduct[1].due.daysUntilExpiration);

            setName3(response.data.data.snapshotByProduct[2].fixedIncome.name);
            setType3(response.data.data.snapshotByProduct[2].fixedIncome.bondType);
            setApplied3(response.data.data.snapshotByProduct[2].position.valueApplied);
            setEquity3(response.data.data.snapshotByProduct[2].position.equity);
            setProfitAbility3(response.data.data.snapshotByProduct[2].position.profitability);
            setPortfolioPercentage3(response.data.data.snapshotByProduct[2].position.portfolioPercentage);
            setCDI3(response.data.data.snapshotByProduct[2].position.indexerValue);
            setPercentageOverIndexer3(response.data.data.snapshotByProduct[2].position.percentageOverIndexer)
            setDate3(response.data.data.snapshotByProduct[2].due.date);
            setDaysUntilExpiration3(response.data.data.snapshotByProduct[2].due.daysUntilExpiration);

            setName4(response.data.data.snapshotByProduct[3].fixedIncome.name);
            setType4(response.data.data.snapshotByProduct[3].fixedIncome.bondType);
            setApplied4(response.data.data.snapshotByProduct[3].position.valueApplied);
            setEquity4(response.data.data.snapshotByProduct[3].position.equity);
            setProfitAbility4(response.data.data.snapshotByProduct[3].position.profitability);
            setPortfolioPercentage4(response.data.data.snapshotByProduct[3].position.portfolioPercentage);
            setCDI4(response.data.data.snapshotByProduct[3].position.indexerValue);
            setPercentageOverIndexer4(response.data.data.snapshotByProduct[3].position.percentageOverIndexer)
            setDate4(response.data.data.snapshotByProduct[3].due.date);
            setDaysUntilExpiration4(response.data.data.snapshotByProduct[3].due.daysUntilExpiration);

            setName5(response.data.data.snapshotByProduct[4].fixedIncome.name);
            setType5(response.data.data.snapshotByProduct[4].fixedIncome.bondType);
            setApplied5(response.data.data.snapshotByProduct[4].position.valueApplied);
            setEquity5(response.data.data.snapshotByProduct[4].position.equity);
            setProfitAbility5(response.data.data.snapshotByProduct[4].position.profitability);
            setPortfolioPercentage5(response.data.data.snapshotByProduct[4].position.portfolioPercentage);
            setCDI5(response.data.data.snapshotByProduct[4].position.indexerValue);
            setPercentageOverIndexer5(response.data.data.snapshotByProduct[4].position.percentageOverIndexer)
            setDate5(response.data.data.snapshotByProduct[4].due.date);
            setDaysUntilExpiration5(response.data.data.snapshotByProduct[4].due.daysUntilExpiration);

            console.log(response)
          })
          .catch((error) => {
             setError(error.message)
             isLoading(false)
          });
      }, [setName]);
  
      if(loading){
          <p>Carregando</p>
      }
  
      if(error){
          return <h1>Deu erro: {error}</h1>
      }
      
    return(
        <s.Content>
            <s.Header>
            <h2>Minhas Rendas Fixas</h2>
            <input placeholder="Ordendar por" type="input" name="searchCategory"  list="category"/>
                <datalist id="category"  >
                    <option value="CL">Classe</option  >
                    <option value="VENC">Vencimento</option>
                    <option value="CDI">Certificado de Depósito Interbancário</option>
                </datalist>

                <img src={searchIcon} alt="procurar"/>
                <input className="textSearch" name="textSearch"/>
            </s.Header>
            <s.List>
                <div className="item">
                    <div className="firstBox">
                        <div className="title">
                            <p>Título
                            <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="bottom">
                            <div className="firstItem">
                                <p>{name.toUpperCase()}</p>
                            </div>

                            <div className="secondItem">
                                Classe
                                <p className="type">{type.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox">
                        <div className="firstItem">
                            <p>Resultado
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>
                        <div className="divider">
                            <div className="secondItem">
                                Valor Inves.
                                <p className="type">R${applied.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Saldo Bruto
                                <p className="type">R${equity.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Rent.
                                <p className="type">{profitAbility.toLocaleString()}%</p>
                            </div>

                            <div className="secondItem">
                                % da Cart.
                                <p className="type">{portfolioPercentage.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                CDI
                                <p className="type">{CDI.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Sobre CDI
                                <p className="type">{percentageOverIndexer.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="thirdBox">
                        <div className="firstItem">
                            <p>Vencimento
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="divider">
                            <div className="secondItem">
                                Data Venc.
                                <p className="type">{date.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Dias até Venc.
                                <p className="type">{daysUntilExpiration.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="firstBox">
                        <div className="title">
                            <p>Título
                            <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="bottom">
                            <div className="firstItem">
                                <p>{name2.toUpperCase()}</p>
                            </div>

                            <div className="secondItem">
                                Classe
                                <p className="type">{type2.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox">
                        <div className="firstItem">
                            <p>Resultado
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>
                        <div className="divider">
                            <div className="secondItem">
                                Valor Inves.
                                <p className="type">R${applied2.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Saldo Bruto
                                <p className="type">R${equity2.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Rent.
                                <p className="type">{profitAbility2.toLocaleString()}%</p>
                            </div>

                            <div className="secondItem">
                                % da Cart.
                                <p className="type">{portfolioPercentage2.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                CDI
                                <p className="type">{CDI2.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Sobre CDI
                                <p className="type">{percentageOverIndexer2.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="thirdBox">
                        <div className="firstItem">
                            <p>Vencimento
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="divider">
                            <div className="secondItem">
                                Data Venc.
                                <p className="type">{date2.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Dias até Venc.
                                <p className="type">{daysUntilExpiration2.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="firstBox">
                        <div className="title">
                            <p>Título
                            <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="bottom">
                            <div className="firstItem">
                                <p>{name3.toUpperCase()}</p>
                            </div>

                            <div className="secondItem">
                                Classe
                                <p className="type">{type3.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox">
                        <div className="firstItem">
                            <p>Resultado
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>
                        <div className="divider">
                            <div className="secondItem">
                                Valor Inves.
                                <p className="type">R${applied3.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Saldo Bruto
                                <p className="type">R${equity3.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Rent.
                                <p className="type">{profitAbility3.toLocaleString()}%</p>
                            </div>

                            <div className="secondItem">
                                % da Cart.
                                <p className="type">{portfolioPercentage3.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                CDI
                                <p className="type">{CDI3.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Sobre CDI
                                <p className="type">{percentageOverIndexer3.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="thirdBox">
                        <div className="firstItem">
                            <p>Vencimento
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="divider">
                            <div className="secondItem">
                                Data Venc.
                                <p className="type">{date3.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Dias até Venc.
                                <p className="type">{daysUntilExpiration3.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="item">
                    <div className="firstBox">
                        <div className="title">
                            <p>Título
                            <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="bottom">
                            <div className="firstItem">
                                <p>{name4.toUpperCase()}</p>
                            </div>

                            <div className="secondItem">
                                Classe
                                <p className="type">{type4.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox">
                        <div className="firstItem">
                            <p>Resultado
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>
                        <div className="divider">
                            <div className="secondItem">
                                Valor Inves.
                                <p className="type">R${applied4.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Saldo Bruto
                                <p className="type">R${equity4.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Rent.
                                <p className="type">{profitAbility4.toLocaleString()}%</p>
                            </div>

                            <div className="secondItem">
                                % da Cart.
                                <p className="type">{portfolioPercentage4.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                CDI
                                <p className="type">{CDI4.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Sobre CDI
                                <p className="type">{percentageOverIndexer4.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="thirdBox">
                        <div className="firstItem">
                            <p>Vencimento
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="divider">
                            <div className="secondItem">
                                Data Venc.
                                <p className="type">{date4.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Dias até Venc.
                                <p className="type">{daysUntilExpiration4.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className="item">
                    <div className="firstBox">
                        <div className="title">
                            <p>Título
                            <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="bottom">
                            <div className="firstItem">
                                <p>{name5.toUpperCase()}</p>
                            </div>

                            <div className="secondItem">
                                Classe
                                <p className="type">{type5.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox">
                        <div className="firstItem">
                            <p>Resultado
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>
                        <div className="divider">
                            <div className="secondItem">
                                Valor Inves.
                                <p className="type">R${applied5.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Saldo Bruto
                                <p className="type">R${equity5.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Rent.
                                <p className="type">{profitAbility5.toLocaleString()}%</p>
                            </div>

                            <div className="secondItem">
                                % da Cart.
                                <p className="type">{portfolioPercentage5.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                CDI
                                <p className="type">{CDI5.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Sobre CDI
                                <p className="type">{percentageOverIndexer5.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="thirdBox">
                        <div className="firstItem">
                            <p>Vencimento
                                <img src={infoIcon} alt="Infos"/>
                            </p>
                        </div>

                        <div className="divider">
                            <div className="secondItem">
                                Data Venc.
                                <p className="type">{date5.toLocaleString()}</p>
                            </div>

                            <div className="secondItem">
                                Dias até Venc.
                                <p className="type">{daysUntilExpiration5.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </s.List>
        </s.Content>
    )
}