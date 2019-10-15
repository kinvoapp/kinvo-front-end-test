import React from 'react';

import './styles.css';
import { ContentBody } from './styles';

import ProductClassAnalysisPage from './components/ProductClassAnalysisPage';
import Header from './components/Header';
import NavigationTab from './components/NavigationTab';

const App = () => (
  <main>
    <Header />
    <ContentBody>
      <NavigationTab />
      <ProductClassAnalysisPage />
    </ContentBody>
  </main>
);

export default App;
