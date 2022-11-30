/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { HiOutlineInformationCircle } from 'react-icons/hi';

export default function FixedIncomeCards(data) {
  return (
    <>
      <Titulo>
        <Title>
          TÍTULO <IconInformation size={20} />
        </Title>
        <div>
          <h6>{data.data.fixedIncome.name}</h6>
          <p>
            CLASSE <span>{data.data.fixedIncome.bondType}</span>
          </p>
        </div>
      </Titulo>
      <Resultado>
        <Title>
          RESULTADO <IconInformation size={20} />
        </Title>
        <div>
          <p>
            VALOR INVES. <span>{data.data.position.valueApplied}</span>
          </p>
          <p>
            SALDO BRUTO <span>{data.data.position.equity}</span>
          </p>
          <p>
            RENT. <span>{data.data.position.profitability}</span>
          </p>
          <p>
            % DA CART. <span>{data.data.position.portfolioPercentage}</span>
          </p>
          <p>
            CDI <span>{data.data.position.indexerValue}</span>
          </p>
          <p>
            SOBRE CDI <span>{data.data.position.percentageOverIndexer}</span>
          </p>
        </div>
      </Resultado>
      <Vencimento>
        <Title>
          VENCIMENTO <IconInformation size={20} />
        </Title>
        <div>
          <p>
            VENCIMENTO <span>{data.data.due.date}</span>
          </p>
          <p>
            DIAS ATÉ VENC. <span>{data.data.due.daysUntilExpiration}</span>
          </p>
        </div>
      </Vencimento>
    </>
  );
}

const IconInformation = styled(HiOutlineInformationCircle)`
  margin-left: 8px;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
`;

const Titulo = styled.div`
  width: 35%;
  padding: 8px;
  margin: 0 8px;
  border: 1px solid #0000000d;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    h6 {
      width: 200px;
      font-size: 12px;
    }

    p {
      display: flex;
      flex-direction: column;

      span {
        color: #8a51ba;
        font-size: 11px;
      }
    }
  }
`;

const Resultado = styled.div`
  width: 45%;
  padding: 8px;
  margin: 0 8px;
  border: 1px solid #0000000d;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    p {
      display: flex;
      flex-direction: column;

      span {
        color: #38bfa0;
      }
    }
  }
`;

const Vencimento = styled.div`
  width: 20%;
  padding: 8px;
  margin: 0 8px;
  border: 1px solid #0000000d;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    p {
      display: flex;
      flex-direction: column;

      span {
        color: #008dcb;
      }
    }
  }
`;
