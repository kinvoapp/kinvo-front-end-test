import React, {Component} from 'react';
import {TelaLista} from '.././styles';
import {IconBoxes} from '.././styles';
import {SummaryIcon} from '.././styles';
import '.././App.css';
import {ProductInfos} from '.././styles';
import {BoxLine} from '.././styles';
import {SearchBar} from '.././styles';
import {SearchLine} from '.././styles';
import {TelaProducts} from '.././styles';
import {Border} from '.././styles';
import Lupa from '.././Images/Lupa.png';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            success: false,
            summary: [],
            products: [],
            filteredProducts: []

        }
    }

// PEGANDO INFORMAÇÕES DA API
    componentDidMount(){
        fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    success: json.success,
                    summary: json.data.summary,
                    products: json.data.products,
                    filteredProducts: json.data.products
                })
            });
    }

// FUNÇÃO QUE FILTRA A LISTA "products"
    onChangeFilter = (Term) => {
        let list = this.state.products;
        let filteredList = list.filter((element) => {
            return element.productName.toLowerCase().includes(Term.target.value.toLowerCase());
        });
        this.setState({
            filteredProducts: filteredList
        })
    }

    render(){
        const {summary, filteredProducts} = this.state;
        const infos = ["SALDO BRUTO", "VALOR APLICADO", "GANHO DE CAPITAL", "TOTAL DISTRIBUIDOS", "YIELD"];
        let cont=0;
        return (
            <div>
            {/* INFORMAÇÕES GERAIS NO TOPO DA LISTA */}
                <TelaLista display="inline-flex">
                    {Object.keys(summary).map((key) => (
                        <IconBoxes>
                            <SummaryIcon fontSize={10} top={20}>{infos[cont++]}</SummaryIcon>
                            <SummaryIcon fontSize={18}><strong>R$ {summary[key].toFixed(2).toString().replace(".",",")}</strong></SummaryIcon>
                        </IconBoxes>
                        )
                    )}
                </TelaLista>
            {/* FIM DAS INFORMAÇÕES GERAIS */}

            {/* TELA DA LISTA FILTRADA */}
                <TelaLista>
                    <TelaProducts>
                    {/* BARRA DE PESQUISA */}
                        <SearchLine>
                            <SummaryIcon top = {0} right = {702} left={21} fontSize={18}><strong>Fundos</strong></SummaryIcon>
                            <div id="Search">
                                <label for="SearchFilter"><img id= "Lupa" src={Lupa} alt=""/></label>
                                <SearchBar id="SearchFilter"onChange = {this.onChangeFilter}/>
                            </div>
                        </SearchLine>
                    {/* FIM DA BARRA DE PESQUISA */}

                    {/* ÍNICIO DA LISTA FILTRADA + ESTILIZAÇÃO */}

                        {filteredProducts.map((data) => (
                            <BoxLine>
                                <Border />
                                <ProductInfos left= {9} top ={7} fontSize = {12} width = {315}>{data.productName}</ProductInfos>
                                
                                <ProductInfos left = {30}>
                                    <ProductInfos align = {'left'} fontSize = {8}> Saldo Atual</ProductInfos>
                                    <ProductInfos width = {140} align = {'left'} fontSize = {14}><strong>R$ {data.equity.toFixed(2).toString().replace(".",",")}</strong></ProductInfos>
                                </ProductInfos>

                                <ProductInfos left= {20} right={30}>
                                    <ProductInfos fontSize = {8}>QUANT.</ProductInfos>
                                    <ProductInfos align = {'right'} fontSize = {14}><strong>{data.amount.toFixed(2).toString().replace(".",",")}</strong></ProductInfos>
                                </ProductInfos>

                                <ProductInfos width = {150} left={40}>
                                    <ProductInfos fontSize={8}>PREÇO MÉDIO</ProductInfos>
                                    <ProductInfos align = {'left'} fontSize = {14}><strong>R$ {data.averagePrice.toFixed(2).toString().replace(".",",")}</strong></ProductInfos>
                                </ProductInfos>

                                <ProductInfos width = {150} left={50}>
                                    <ProductInfos fontSize={8}>ULTIMA COTAÇÃO</ProductInfos>
                                    <ProductInfos align = {'left'} fontSize = {14}><strong>R$ {data.lastQuotation.toFixed(2).toString().replace(".",",")}</strong></ProductInfos>
                                </ProductInfos>

                                <ProductInfos left = {100}>
                                    <ProductInfos fontSize={8}>YIELD (1M)</ProductInfos>
                                    <ProductInfos align = {'left'} fontSize = {14}><strong>{data.currentMonthYield.toFixed(2).toString().replace(".",",")}%</strong></ProductInfos>
                                </ProductInfos>

                                <ProductInfos width = {100} left={60}>
                                    <ProductInfos fontSize={8}>YIELD (12M)</ProductInfos>
                                    <ProductInfos align = {'left'} fontSize = {14}><strong>{data.lastTwelveMonthsYeld.toFixed(2).toString().replace(".",",")}%</strong></ProductInfos>
                                </ProductInfos>
    
                                <ProductInfos width = {100} left={50}>
                                    <ProductInfos fontSize={8}>% CARTEIRA</ProductInfos>
                                    <ProductInfos align = {'left'} fontSize = {14}><strong>{data.lastTwelveMonthsYeld.toFixed(2).toString().replace(".",",")}%</strong></ProductInfos>
                                </ProductInfos>
                            </BoxLine>
                    // FIM DA LISTA FILTRADA
                        ))}
                    </TelaProducts>
                </TelaLista>
                
            </div>
        )
    }
}

export default ProductList;