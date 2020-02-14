import React, {Component} from 'react';
import {TelaLista} from '.././styles';
import {IconBoxes} from '.././styles';
import {SummaryIcon} from '.././styles';
import '.././App.css';
import {ProductInfos} from '.././styles';
import {ListLine} from '.././styles';
import {SearchBar} from '.././styles';
import {SearchLine} from '.././styles';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            success: false,
            summary: [],
            products: []

        }
    }
    componentDidMount(){
        fetch('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    success: json.success,
                    summary: json.data.summary,
                    products: json.data.products,
                })
            });
        console.log(this.state.success);
        console.log(this.state.summary);
        console.log(this.state.products);
    }
    render(){
        const {success, summary, products} = this.state;
        return (
            <div>
                <TelaLista display="inline-flex">
                    <IconBoxes id="firstBox">
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
                    <SearchLine>
                        <SummaryIcon right = {702} left={21} fontSize={18}><strong>Fundos</strong></SummaryIcon>
                        <SearchBar />
                    </SearchLine>
                    {products.map((data) => (
                        <ListLine>
                            {
                                Object.keys(data).map((key) => (
                                    <ProductInfos>{data[key]}</ProductInfos>
                                ))
                            }
                        </ListLine>
                        
                    ))}
                </TelaLista>
                
            </div>
        )
    }
}

export default ProductList;