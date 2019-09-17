import React, {Component} from 'react';
import './styles.css';
import '../../styles.css';
import api from '../../services/api';


export default class ProductClassAnalysisPage extends Component {

    state = {
        products : [],
        filterText: [],
        search: '',
        loading: true,
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get();
        this.setState({products: response.data.data.products, loading: false});
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value.substr(0,20)});
    }

    renderLoading = () => (
        <div className="textBoxLoading">Carregando...</div>
    )

    renderChooseInputs = () => (

        <div className="chooseInputs">
    
            <a href="#" className="chooseClassButton">
                <div className="chooseClass activeInput">
                    <p>Ações</p>
                </div>
            </a>
    
            <a href="#" className="chooseClassButton">
                <div className="chooseClass">
                    <p>Nome da Classe</p>
                </div>
            </a>
            
            <a href="#" className="chooseClassButton">
            <div className="chooseClass">
                <p>Nome da Classe</p>
            </div>
            </a>
    
            <a href="#" className="chooseClassButton">           
            <div className="chooseClass">
                <p>Nome da Classe</p>
            </div>
            </a>
    
        </div>
    )

    renderClassAnalysis = () => (

        <div className="classAnalysis">
    
            <div className="values">
                <h6>SALDO BRUTO</h6>                               
                <h4>R$ 12.709,14</h4>
            </div>
    
            <div className="values">
                <h6>VALOR APLICADO</h6>                               
                <h4>R$ 10.023,12</h4>
            </div>
    
            <div className="values">
                <h6>GANHO DE CAPITAL</h6>                               
                <h4>R$ 2.686,01</h4>
            </div>
    
            <div className="values">
                <h6>TOTAL DISTRIBUIDOS</h6>                               
                <h4>R$ 800,00</h4>
            </div>
    
            <div className="values">
                <h6>YIELD</h6>                               
                <h4>15%</h4>
            </div>
    
        </div>
    )

    renderSearchList = () => {
        const filteredProducts = this.state.products.filter(
            (product) => {
                return product.productName.indexOf(this.state.search) !== -1;
            }
        );
        return(
            <div className="searchList">
                {filteredProducts.map(products => {
                    return(
                        <div className="listProducts">
                            <div className="productPurple"></div>               
                            <div className="productName text-box"><p>{products.productName}</p></div> 
            
                                <div className="currentBalance text-box">
                                    <p>SALDO ATUAL</p>
                                    <h3>R$ {products.equity}</h3>
                                </div>
                       
                                <div className="price text-box">
                                    <p>QUANT.</p>
                                    <h3>{products.amount}</h3>
                                </div>
            
                                <div className="price text-box">
                                    <p>PREÇO MÉDIO</p>
                                    <h3>R$ {products.averagePrice}</h3>
                                </div>
            
                                <div className="price text-box">
                                    <p>ÚLTIMA COTAÇÃO</p>
                                    <h3>R$ {products.lastQuotation}</h3>
                                </div>  
                      
                                <div className="yield1MValue text-box">
                                    <p>YIELD (1M)</p>
                                    <h3>{products.currentMonthYield}%</h3>
                                </div>
            
                                <div className="yield12MValue text-box">
                                    <p>YIELD (12M)</p>
                                    <h3>{products.lastTwelveMonthsYeld}%</h3>
                                </div>
            
                                <div className="walletPercent text-box">
                                    <p>% CARTEIRA</p>
                                    <h3>12,31%</h3>
                                </div>
            
                        </div>
                        )
                    })}                
            </div>
        )
    }

    renderSearchFilter = () => (    
        <div className="searchTab">
                                    
            <div>
                <p>Fundos</p>
            </div>
    
            <div className="searchTool">
                <a href="#"><img className="searchIcon" src={require('./images/searchIcon.svg')}></img></a>
                <input value={this.state.search} onChange={this.updateSearch} className="searchProductInput"></input>                                    
            </div>
    
        </div>
    )

    renderProductList = () => {
        const searchFilter = this.renderSearchFilter();
        const searchList = this.renderSearchList();
    if (this.state.loading) {
        return this.renderLoading();
    }
            return(
        <div className="funds">
            {searchFilter}
            {searchList}
        </div>
        )
    }

    render(){
        const chooseInputs = this.renderChooseInputs();
        const classAnalysis = this.renderClassAnalysis();
        const productList = this.renderProductList();
        return(
            <div id="productAcess">
    
                <div className="productAcessPrincipal">
                    <p>Análise por Classe de Ativos</p>    
                    <div className="productSearch">
                        {chooseInputs}
                        <div className="productsContainer">                       
                            {classAnalysis}
                            {productList}
                        </div>
                    </div>
    
                </div>
    
            </div>
        )
    }
}