import axios from 'axios';
import { useEffect, useState } from 'react';
import botaoHamburguerIcon from '../../assets/images/botaoHamburguerIcon.svg';
import dropdownIcon from '../../assets/images/dropdownIcon.svg';
import investidoIcon from '../../assets/images/investidoIcon.svg';
import logoImg from '../../assets/images/logo.svg';
import rentabilidadeIcon from '../../assets/images/rentabilidadeIcon.svg';
import saldoIcon from '../../assets/images/saldoIcon.svg';
import { Content } from './style';

export function Header() {
    const [percentageProfit, setPercentageProfit] = useState('')
    const [loading, isLoading] = useState(true)
    const [error, setError] = useState('')
    const [equity, setEquity] = useState('');
    const [valueApplied, setValueApplied] = useState('');
  
    useEffect(() => {
      axios
        .get(
          'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData'
        )
        .then((response) => {
            setEquity(response.data.data.snapshotByPortfolio.equity);
            setValueApplied(response.data.data.snapshotByPortfolio.valueApplied);
            setPercentageProfit(response.data.data.snapshotByPortfolio.percentageProfit)
        })
        .catch((error) => {
           setError(error.message)
           isLoading(false)
        });
    }, [setEquity]);

    if(loading){
        <p>Carregando</p>
    }

    if(error){
        return <h1>Deu erro: {error}</h1>
    }
            
    return(
    <Content>
        <header>
            <nav id="page-room">
                
                <img src={logoImg} alt="Kinvo"/>

                <div className="content">
                <ul>
                    <li>
                    <img src={saldoIcon} alt="Saldo Bruto"/>
                    <div className="menu-box">
                        <span>Saldo Bruto</span>
                        <h2>R$ {equity.toLocaleString()}</h2>
                    </div>
                    </li> 
                    
                    <li>
                        <img src={investidoIcon} alt="Valor Aplicado"/>
                        
                        <div className="menu-box">
                            <span>Valor Aplicado</span>
                            <h2>R$ {valueApplied.toLocaleString()}</h2>
                        </div>
                    </li>

                    <li >
                        <img src={rentabilidadeIcon} alt="Rentabilidade"/>

                        <div className="menu-box">
                            <span>Rentabilidade</span>
                            <h2>{percentageProfit.toLocaleString()}%</h2>
                        </div>
                    </li>

                    <li >
                        <img src={dropdownIcon} alt="Minha carteira"/>

                        <div className="menu-box">
                            <span>Carteira</span>
                            <h3>Minha carteira</h3>
                        </div>
                    </li>
                </ul>
                </div>
                
                <button type="button" className="dropDownButton" >
                    <img src={botaoHamburguerIcon} alt="Dropdown Button"/>

                </button>
            </nav>
        </header>    
    </Content>    
    );
}