import React from "react";

import AtetionIcon from "../../assets/icons/atetion-icon.svg";

import {
  ProductsContainer,
  ProductInformationWrapper,
  ProductInformation,
} from "./style";

function Product({ product }) {

  function NumberFormat(number){
    return number.toLocaleString('pt-BR');
  }

  function DateFormat(date){
    return date.replaceAll('/', '.')
  }

  return (
    <ProductsContainer>
      <ProductInformationWrapper width="35%">
        <div className="d-flex title-wrapper">
          <h4>Titulo</h4>
          <img src={AtetionIcon} alt="" />
        </div>
        <ProductInformation>
          <p className="productName">{product.fixedIncome.name}</p>
          <div>
            <h4>Classe</h4>
            <p className="productType">{product.fixedIncome.bondType}</p>
          </div>
        </ProductInformation>
      </ProductInformationWrapper>
      <ProductInformationWrapper width="45%">
        <div className="d-flex title-wrapper">
          <h4>Minha posição</h4>
          <img src={AtetionIcon} alt="" />
        </div>
        <ProductInformation fontColor="#38BFA0">
          <div className="info">
            <h6>Valor inves.</h6>
            <p>{NumberFormat(product.position.valueApplied)}</p>
          </div>
          <div className="info"> 
            <h6>Saldo Bruto</h6>
            <p>{NumberFormat(product.position.equity)}</p>
          </div>
          <div className="info">
            <h6>Rent.</h6>
            <p>{NumberFormat(product.position.profitability)}%</p>
          </div>
          <div className="info">
            <h6>% Da Cart</h6>
            <p>{NumberFormat(product.position.portfolioPercentage)}%</p>
          </div>
          <div className="info">
            <h6>{product.position.indexerLabel}</h6>
            <p>{NumberFormat(product.position.indexerValue)}</p>
          </div>
          <div className="info">
            <h6>Sobre {product.position.indexerLabel}</h6>
            <p>{NumberFormat(product.position.percentageOverIndexer)}</p>
          </div>
        </ProductInformation>
      </ProductInformationWrapper>
      <ProductInformationWrapper width="20%">
        <div className="d-flex title-wrapper">
          <h4>Vencimento</h4>
          <img src={AtetionIcon} alt="" />
        </div>
        <ProductInformation fontColor="#008DCB">
          <div>
            <h6>Data Venc.</h6>
            <p>{ DateFormat(product.due.date) }</p>
          </div>
          <div>
            <h6>Dias até o venc.</h6>
            <p>{product.due.daysUntilExpiration}</p>
          </div>
        </ProductInformation>
      </ProductInformationWrapper>
    </ProductsContainer>
  );
}

export default Product;
