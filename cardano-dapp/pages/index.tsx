import React from 'react';
import WalletConnector from '../components/WalletConnector';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Cardano DApp</h1>
      <WalletConnector />
    </div>
  );
};

export default Home;