import React from 'react';
import { DetailedRow, DetailedCard, DetailedCardHeader, 
  DetailedCardBody, TitleName, Label, Data} from './Card';
import {formatCoin} from '../utils.js';


function Products(props){  
  return(
    <>
     {props.products.map((product, index) => {
      return(
        <DetailedRow key={index}>
          <DetailedCard>
            <DetailedCardHeader>
              <Label>Titulo</Label>
            </DetailedCardHeader>
            <DetailedCardBody>
              <TitleName>{product.fixedIncome.name}</TitleName>
              <div>
                <Label>Classe</Label>
                <Data>{product.fixedIncome.bondType}</Data>
              </div>
            </DetailedCardBody>
          </DetailedCard>

          <DetailedCard>
            <DetailedCardHeader>
              <Label>Resultado</Label>
            </DetailedCardHeader>
            <DetailedCardBody>
              <div>
                <Label>Valor Inves.</Label>
                <Data green>{formatCoin(product.position.valueApplied)}</Data>
              </div>

              <div>
                <Label>Saldo Bruto</Label>
                <Data green>{formatCoin(product.position.equity)}</Data>
              </div>

              <div>
                <Label>Rent.</Label>
                <Data green>{product.position.profitability}%</Data>
              </div>

              <div>
                <Label>% da cart.</Label>
                <Data green>{product.position.portfolioPercentage}%</Data>
              </div>

              <div>
                <Label>{product.position.indexerLabel}</Label>
                <Data green>{product.position.indexerValue}</Data>
              </div>

              <div>
                <Label>sobre {product.position.indexerLabel}</Label>
                <Data green>{product.position.percentageOverIndexer}</Data>
              </div>
            </DetailedCardBody>
          </DetailedCard>

          <DetailedCard>
            <DetailedCardHeader>
              <Label>Vencimento</Label>
            </DetailedCardHeader>
            <DetailedCardBody>
              <div>
                <Label>data venc.</Label>
                <Data blue>{product.due.date}</Data>
              </div>

              <div>
                <Label>Dias até venc.</Label>
                <Data blue>{product.due.daysUntilExpiration}</Data>
              </div>
            </DetailedCardBody>
          </DetailedCard>
        </DetailedRow>
      ) 
    })} 
    </>
  )
}

export default Products;