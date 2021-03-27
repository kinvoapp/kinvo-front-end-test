import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { PageTitle } from './styles';

const Bonds: React.FC = () => (
  <>
    <Header />

    <div className="content">
      <Sidebar />

      <PageTitle>&nbsp;</PageTitle>
    </div>
  </>
);

export default Bonds;
