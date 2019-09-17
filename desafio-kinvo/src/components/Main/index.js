import React, {Component} from 'react';
import api from '../../services/api';
import retangulo from './retangulo.svg';

import './styles.css';

export default class Main extends Component{
    
    state = {
        filteredProducts: [],
        products: [],
        summary: [],
    }
   
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/');
        const data = response.data.data;
        this.setState({products: data.products,filteredProducts:data.products, summary:data.summary});
    }

    handleChange = event => {
        
        const input = event.currentTarget.value;
        let filteredProducts = this.state.filteredProducts;
        let products = this.state.products;
        this.setState({filteredProducts: products.filter(product=>{
            return product['productName'].substring(0,input.length) == input.toUpperCase()
        }
        )});        
    }
    render(){
        return (
            <section className="box container column">
                    <div className="header" id="header">
                        <h1>Análise por classe de Ativos</h1>
                    </div>
                    <nav id="nav-horizontal" >
                        <ul className="between box">
                            <li>Ações</li>
                            <li>Nome da Classe</li>
                            <li>Nome da Classe</li>
                            <li className="lastLi">Nome da Classe</li>
                        </ul>
                    </nav>
                    <div id="secao">
                        <div className="subtitulos around box">
                            <div className="elemento">
                                <h3>Saldo Bruto</h3>
                                <p>R$ {this.state.summary["grossBalance"]}</p>
                            </div>
                            <div className="elemento">
                                <h3>Valor Aplicado</h3>
                                <p>R$ {this.state.summary["appliedValue"]}</p>
                            </div>
                            <div className="elemento">
                                <h3>Ganho de capital</h3>
                                <p>R$ {this.state.summary["capitalGains"]}</p>
                            </div>
                            <div className="elemento">
                                <h3>Total Distribuido</h3>
                                <p>R$ {this.state.summary["earnings"]}</p>
                            </div>
                            <div className="elemento">
                                <h3>Yield</h3>
                                <p>{this.state.summary["yield"]}%</p>
                            </div>                            
                        </div>
                        <div id="fundos" className="content">
                            <div id="headFundos" className="box between">
                                <h2>Fundos</h2>
                                <input id="input" type="text" onChange={this.handleChange} />
                            </div>
                            
                            <div id="table" className="box column">
                               
                                {
                                this.state.filteredProducts.map(product=>(   
                                    <div id="linha" className="box">
                                       
                                        <div id="tableHeader" className="coluna box column">
                                             <span ><img src={retangulo}/>{product['productName']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>SALDO ATUAL</h4>
                                            <span>R$ {product['equity']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>QUANT.</h4>
                                            <span>{product['amount']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>PREÇO MÉDIO</h4>
                                            <span>R$ {product['averagePrice']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>ÚLTIMA COTAÇÃO</h4>
                                            <span>R$ {product['lastQuotation']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>YIELD(1M)%</h4>
                                            <span>{product['currentMonthYield']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>YIELD(12M)%</h4>
                                            <span>{product['lastTwelveMonthsYeld']}</span>
                                        </div>
                                        <div className="coluna">
                                            <h4>% CARTEIRA</h4>
                                            <span>{product['lastTwelveMonthsYeld']}</span>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>

                </section>
        )
    }
}
