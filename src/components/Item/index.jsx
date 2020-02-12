import React from 'react';
import { ItemContainer, Mark, ItemTitulo, ItemValor, ItemNomeProduto } from './styles';

const Item = ({ titulo, saldoAtual, quant, precoMedio, ultimaCotacao, yield1M, yield12M, carteira }) => {
    return(
        <ItemContainer>
            <div id="sub-item-titulo">
                <Mark />
                <ItemNomeProduto>{titulo}</ItemNomeProduto>
                <div className="sub-item" style={{ marginLeft: 'auto' }}>
                    <ItemTitulo>SALDO ATUAL</ItemTitulo>
                    <ItemValor>{saldoAtual}</ItemValor>
                </div>
            </div>
            <div className="sub-container">
                <div className="sub-item">
                    <ItemTitulo>QUANT.</ItemTitulo>
                    <ItemValor>{quant}</ItemValor>
                </div>
                <div className="sub-item">
                    <ItemTitulo>PREÇO MÉDIO</ItemTitulo>
                    <ItemValor>{precoMedio}</ItemValor>
                </div>
                <div className="sub-item">
                    <ItemTitulo>ULTIMA COTAÇÃO</ItemTitulo>
                    <ItemValor>{ultimaCotacao}</ItemValor>
                </div>
            </div>
            <div className="sub-container">
                <div className="sub-item">
                    <ItemTitulo>YIELD (1M)</ItemTitulo>
                    <ItemValor>{yield1M}</ItemValor>
                </div>
                <div className="sub-item">
                    <ItemTitulo>YIELD (12M)</ItemTitulo>
                    <ItemValor>{yield12M}</ItemValor>
                </div>
                <div className="sub-item">
                    <ItemTitulo>% CARTEIRA</ItemTitulo>
                    <ItemValor>{carteira}</ItemValor>
                </div>
            </div>
        </ItemContainer>
    );
}

export default Item;
