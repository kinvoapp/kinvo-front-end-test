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
        return (
            <div>
                <TelaLista display="inline-flex">
                    <IconBoxes>
                        <SummaryIcon fontSize={10} top={20}>SALDO BRUTO</SummaryIcon>
                        <SummaryIcon fontSize={18}><strong>R${summary.grossBalance}</strong></SummaryIcon>
                    </IconBoxes>

                    <IconBoxes>
                        <SummaryIcon fontSize={10} top={20}>VALOR APLICADO</SummaryIcon>
                        <SummaryIcon fontSize={18}><strong>R${summary.appliedValue}</strong></SummaryIcon>
                    </IconBoxes>

                    <IconBoxes>
                        <SummaryIcon fontSize={10} top={20}>GANHO DE CAPITAL</SummaryIcon>
                        <SummaryIcon fontSize={18}><strong>R${summary.capitalGains}</strong></SummaryIcon>
                    </IconBoxes>

                    <IconBoxes>
                        <SummaryIcon fontSize={10} top={20}>TOTAL DISTRIBUIDOS</SummaryIcon>
                        <SummaryIcon fontSize={18}><strong>R${summary.earnings}</strong></SummaryIcon>
                    </IconBoxes>

                    <IconBoxes>
                        <SummaryIcon fontSize={10} top={20}>YIELD</SummaryIcon>
                        <SummaryIcon fontSize={18}><strong>R${summary.yield}</strong></SummaryIcon>
                    </IconBoxes>
                </TelaLista>

                <TelaLista>
                    <TelaProducts>
                        <SearchLine>
                            <SummaryIcon top = {0} right = {702} left={21} fontSize={18}><strong>Fundos</strong></SummaryIcon>
                            <div id="Search">
                                <label for="SearchFilter"><img id= "Lupa" src={Lupa} alt=""/></label>
                                <SearchBar id="SearchFilter"onChange = {this.onChangeFilter}/>
                            </div>
                        </SearchLine>

                        {filteredProducts.map((data) => (
                            <BoxLine>
                                <Border />
                                <ProductInfos top ={7} fontSize = {12} width = {315}>{data.productName}</ProductInfos>
                                
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
                        ))}
                    </TelaProducts>
                </TelaLista>
                
            </div>
        )
    }
}

export default ProductList;