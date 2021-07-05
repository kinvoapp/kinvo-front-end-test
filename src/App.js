import React, { useState } from 'react';
import { DataContextProvider } from './contexts/DataContext';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { SnapshotByPortfolio } from './components/SnapshotByPortfolio';
import { ContentSection } from './components/ContentSection';
import { SelectInput } from './components/SelectInput';
import { SearchInput } from './components/SearchInput';
import { GlobalStyle } from './globalStyle';
import { MyFixedIncome } from './components/MyFixedIncome';

const App = () => {
  const [type, setType] = useState('OrdenarPor');
  const [search, setSearch] = useState('');
  const selectOptions = [
    { name: 'Valor Investido', value: 'position.valueApplied' },
    { name: 'Saldo Bruto', value: 'position.equity' },
    { name: 'Rentabilidade', value: 'position.profitability' },
    { name: '% da Carteira', value: 'position.portfolioPercentage' },
    { name: 'Indexer', value: 'position.indexerValue' },
    { name: '% Sobre Indexer', value: 'position.percentageOverIndexer' },
    { name: 'Data de expiração', value: 'due.daysUntilExpiration' },
  ];

  return (
    <DataContextProvider>
      <GlobalStyle />
      <Header />
      <Main>
        <Menu />
        <Content title="Renda Fixa">
          <SnapshotByPortfolio />
          <ContentSection
            title="Minhas Rendas Fixas"
            filter={
              <div style={{ display: 'flex' }}>
                <SelectInput
                  options={selectOptions}
                  onChange={({ target: { value } }) => setType(value)}
                  defaultValue={type}
                />
                <SearchInput
                  value={search}
                  onChange={({ target: { value } }) => setSearch(value)}
                />
              </div>
            }
          >
            <MyFixedIncome type={type} search={search} />
          </ContentSection>
        </Content>
      </Main>
    </DataContextProvider>
  );
};

export default App;
