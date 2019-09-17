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
                        <img src={require('./images/circle1.svg')}></img>
                        <h5>Resumo <br></br> Da Carteira</h5>
                        
                    </div>      
                    <a href="#"><img src={arrowIcon}></img></a>       
                </div>
            </a>

            <a href="#">
                <div className="navigationTabItems">
                    <div className="navigationTabText">
                        <img src={require('./images/circle2.svg')}></img>
                        <h5>Meus <br></br> Produtos</h5>
                        
                    </div>  
                    <a href="#"><img src={arrowIcon}></img></a>            
                </div>
            </a>

            <a href="#"><div className="navigationTabItems">
                <div className="navigationTabText">
                    <img src={require('./images/circle3.svg')}></img>
                    <h5>Meus <br></br> Proventos</h5>
                    
                </div>     
                <a href="#"><img src={arrowIcon}></img></a>          
            </div>
            </a>

            <a href="#"><div className="navigationTabItems active">
                <div className="navigationTabText">
                    <img src={require('./images/activeCircle.svg')}></img>
                    <h5>Análise por<br></br> Classe de Produto</h5>
                    
                </div>       
                <a href="#"><img src={arrowIcon}></img></a>       
            </div>
            </a>

            <a href="#"><div className="navigationTabItems">
                <div className="navigationTabText">
                    <img src={require('./images/circle4.svg')}></img>
                    <h5>Rentabilidade<br></br> Real </h5>
                    
                </div>     
                <a href="#"><img src={arrowIcon}></img></a>         
            </div>
            </a>

            <a href="#"><div className="navigationTabItems">
                <div className="navigationTabText">
                    <img src={require('./images/circle5.svg')}></img>
                    <h5>Projeção<br></br> da Carteira</h5>
                    
                </div>    
                <a href="#"><img src={arrowIcon}></img></a>         
            </div>
            </a>

            <a href="#"><div className="navigationTabItems">
                <div className="navigationTabText">
                    <img src={require('./images/circle1.svg')}></img>
                    <h5>Risco <br></br> x Retorno</h5>
                    
                </div>    
                <a href="#"><img src={arrowIcon}></img></a>          
            </div>
            </a>

            <a href="#"><div className="navigationTabItems">
                <div className="navigationTabText">
                    <img src={require('./images/circle1.svg')}></img>
                    <h5>Cobertura <br></br>do FGC</h5>
                    
                </div> 
                <a href="#"><img src={arrowIcon}></img></a>

            </div>
            </a>

        </div>
    )
}

export default NavigationTab;
