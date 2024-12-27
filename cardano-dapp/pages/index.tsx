import React from 'react';
import WalletConnect from '../components/WalletConnect';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Cardano DApp</h1>
      <WalletConnect />
    </div>
  );
};

export default Home;