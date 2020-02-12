import React, { useEffect, useState } from 'react';
import { ContainerHeader, ContainerList, Container } from './AppStyles';
import SearchBar from './components/SearchBar';
import Item from './components/Item';
import axios from 'axios';

const App = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get('https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation')
      .then(res => {
        console.log(res);
        setLista(res.data.data.products);
    });
  }, []);

  async function handleChange(query) {
    let currentList = [];
    let newList = [];
    if (query !== "") {
      currentList = lista;
      newList = currentList.filter(item => {
      const lc = item.productName.toLowerCase();
        const filter = query.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = lista;
    }

    setLista(newList); 
  }

  return (
    <Container>
      <ContainerList>
        <ContainerHeader>
          <p>Fundos</p>
          <SearchBar
            onchange={e => handleChange(e.target.value)}
          />
        </ContainerHeader>

        {lista.map(produto => 
          <Item
              titulo={produto.productName}
              saldoAtual={produto.equity}
              quant={produto.amount}
              precoMedio={produto.averagePrice}
              ultimaCotacao={produto.lastQuotation}
              yield1M={produto.currentMonthYield}
              yield12M={produto.lastTwelveMonthsYeld}
              carteira="0%"
            />
          )}
      </ContainerList>
    </Container>
  );
}

export default App;
