import './style.css';

import { ReactComponent as Logo} from '../../assets/LogoKinvo.svg';

import { ReactComponent as Up} from '../../assets/Up.svg';
import { ReactComponent as Ring} from '../../assets/Ring.svg';
import { ReactComponent as Menu} from '../../assets/Menu.svg';
import { ReactComponent as Down} from '../../assets/Down.svg';
import { ReactComponent as Diagonal} from '../../assets/Diagonal.svg';

import Data from '../../Data/index';

export default async function Header()
{
    //react está dando bug aqui
    const dados_api = await Data();
    const {snapshotByPortfolio} = dados_api;

    return(
    <div  className="cabecalho">
        <div className="logomarca">
            <Logo />
        </div>

        <div className="menu">        
            <div className="item-menu">
                <Ring className ="imagem" />
                <p className = "texto">Saldo Bruto</p>
                <h3 className = "valor">{snapshotByPortfolio.equity}</h3>
            </div>    

            <div className="item-menu">
                <Up className="imagem"/>
                <p className = "texto">Valor Aplicado</p>
                <h3 className = "valor">{snapshotByPortfolio.valueApplied}</h3>
            </div>    

            <div className="item-menu">
                <Diagonal className="imagem"/>
                <p className = "texto">Rentabilidade</p>
                <h3 className = "valor">{snapshotByPortfolio.percentageOverIndexer/100}%</h3>
            </div>    
        </div> 
            
        <div className="item-menu">
            <Down className="imagem"/>
            <p className = "texto">Carteira</p>
            <h3 className = "valor">Minha Carteira</h3>
        </div>    

        <Menu className="imagem"/>               
    </div>
    )
}

