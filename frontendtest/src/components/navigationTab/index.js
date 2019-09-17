import React, {Component} from 'react';
import './styles.css';
import arrowIcon from './images/arrow.svg';
import '../../styles.css';

const NavigationTab = () => {
    return(

        <div id="navigationTab">

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/walletOverviewIcon.svg')}></img>
                        <h5>Resumo <br></br> Da Carteira</h5>                       
                    </div>      
                    <a href="#"><img src={arrowIcon}></img></a>       
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/myProductsIcon.svg')}></img>
                        <h5>Meus <br></br> Produtos</h5>                        
                    </div>  
                    <a href="#"><img src={arrowIcon}></img></a>            
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/myProceedsIcon.svg')}></img>
                        <h5>Meus <br></br> Proventos</h5>                  
                    </div>     
                    <a href="#"><img src={arrowIcon}></img></a>          
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems active">
                    <div className="navigationTabText">
                        <img src={require('./images/productClassAnalysisIcon.svg')}></img>
                        <h5>Análise por<br></br> Classe de Produto</h5>                        
                    </div>       
                    <a href="#"><img src={arrowIcon}></img></a>       
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/realProftabilityIcon.svg')}></img>
                        <h5>Rentabilidade<br></br> Real </h5>                        
                    </div>     
                    <a href="#"><img src={arrowIcon}></img></a>         
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/riskReturnIcon.svg')}></img>
                        <h5>Projeção<br></br> da Carteira</h5>                       
                    </div>    
                    <a href="#"><img src={arrowIcon}></img></a>         
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/walletProjectionIcon.svg')}></img>
                        <h5>Risco <br></br> x Retorno</h5>                       
                    </div>    
                    <a href="#"><img src={arrowIcon}></img></a>          
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/fgcCoveredIcon.svg')}></img>
                        <h5>Cobertura <br></br>do FGC</h5>
                        
                    </div> 
                    <a href="#"><img src={arrowIcon}></img></a>
                </div>
            </a>

        </div>
    )
}

export default NavigationTab;
