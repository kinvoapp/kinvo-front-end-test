import "./RendasFixasCard.css";
import React from "react";

import info from "../../assets/main-content/info.svg";

const TitleSection = ({ text }) => {
  return (
    <div className='title-area'>
      <p>{text}</p>

      <img src={info} alt='Ícone de informação' className='info-icon' />
    </div>
  );
};

const TitleComponent = ({ contentText, classText }) => {
  return (
    <div className='rendas-fixas-title'>
      <TitleSection text='TÍTULO' />

      <div className='content-area'>
        <div className='content'>
          <h5>{contentText}</h5>
        </div>

        <div className='classe'>
          <h6>CLASSE</h6>
          <p>{classText}</p>
        </div>
      </div>
    </div>
  );
};

const MinhaPosicao = ({ values, saldo, rent, percent, cdi, overCdi }) => {
  return (
    <div className='rendas-fixas-posicao'>
      <TitleSection text='MINHA POSIÇÃO' />

      <div className='content-area'>
        <div className='posicao-content'>
          <h6>VALOR INVES.</h6>
          <p>{values}</p>
        </div>
        <div className='posicao-content'>
          <h6>SALDO BRUTO</h6>
          <p>{saldo}</p>
        </div>
        <div className='posicao-content'>
          <h6>RENT.</h6>
          <p>{rent}</p>
        </div>
        <div className='posicao-content'>
          <h6>% DA CART.</h6>
          <p>{percent}</p>
        </div>
        <div className='posicao-content'>
          <h6>CDI</h6>
          <p>{cdi}</p>
        </div>
        <div className='posicao-content'>
          <h6>SOBRE CDI</h6>
          <p>{overCdi}</p>
        </div>
      </div>
    </div>
  );
};

const Vencimento = ({ dataExp, daysLeft }) => {
  return (
    <div className='rendas-fixas-vencimento'>
      <TitleSection text='VENCIMENTO' />

      <div className='content-area'>
        <div className='classe'>
          <h6>DATA VENC.</h6>
          <p>{dataExp}</p>
        </div>

        <div className='classe'>
          <h6>DIAS ATÉ VENC.</h6>
          <p>{daysLeft}</p>
        </div>
      </div>
    </div>
  );
};

function RendasFixasCard({ data }) {
  return (
    <div className='rendas-fixas-card'>
      <TitleComponent
        contentText={data.fixedIncome.name}
        classText={data.fixedIncome.bondType}
      />

      <MinhaPosicao
        values={data.position.valueApplied}
        saldo={data.position.equity}
        rent={data.position.profitability}
        percent={data.position.portfolioPercentage}
        cdi={data.position.indexerValue}
        overCdi={data.position.percentageOverIndexer}
      />

      <Vencimento
        dataExp={data.due.date}
        daysLeft={data.due.daysUntilExpiration}
      />
    </div>
  );
}

export default RendasFixasCard;
