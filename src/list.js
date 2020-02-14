import React from 'react';

const List = props => (
  <>
    <div
      style={{
        display: 'inline-flex',
        borderLeft: '5px solid #4C309B',
        borderRadius: '2px',
        height: '6vh',
        width: '100%',
        marginTop: '3vh',
        justifyContent: 'space-between'
      }}
    >
      <h4
        style={{
          marginLeft: '1vw',
          fontSize: '12px',
          fontFamily: 'Helvetica',
          color: '#4C309B',
          textTransform: 'uppercase'
        }}
      >
        {props.data.productName}
      </h4>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          Saldo atual
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          R$
          {parseFloat(props.data.equity)
            .toFixed(2)
            .replace('.', ',')}
        </h5>
      </div>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          Quant.
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          {props.data.amount}
        </h5>
      </div>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          Preço Médio
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          R$
          {parseFloat(props.data.averagePrice)
            .toFixed(2)
            .replace('.', ',')}
        </h5>
      </div>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          Última contação
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          R$
          {parseFloat(props.data.lastQuotation)
            .toFixed(2)
            .replace('.', ',')}
        </h5>
      </div>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          yield (1M)
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          {parseFloat(props.data.currentMonthYield)
            .toFixed(2)
            .replace('.', ',')}
          %
        </h5>
      </div>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          yield (12M)
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          {parseFloat(props.data.lastTwelveMonthsYeld)
            .toFixed(2)
            .replace('.', ',')}
          %
        </h5>
      </div>
      <div>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontSize: '8px',
            fontFamily: 'Helvetica',
            textTransform: 'uppercase',
            color: '#4C309B'
          }}
        >
          % carteira
        </h5>
        <h5
          style={{
            padding: '0',
            margin: '0',
            fontFamily: 'Helvetica',
            fontSize: '14px',
            color: '#4C309B'
          }}
        >
          {parseFloat(props.data.currentMonthYield)
            .toFixed(2)
            .replace('.', ',')}
          %
        </h5>
      </div>
    </div>
  </>
);

export default List;
