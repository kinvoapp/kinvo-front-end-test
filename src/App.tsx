import Layout from '@components/layout/Layout';
import PrivateRouting from '@routes/PrivateRouting';
import React from 'react';

const App = () => {
  const test = 1;
  return (
    <Layout>
      <PrivateRouting />
    </Layout>
  );
};

export default App;
