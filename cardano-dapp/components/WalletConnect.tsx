'use client';

import React from 'react';
import { useNetwork } from '../contexts/NetworkContext';

const WalletConnect: React.FC = () => {
  const { connectWallet, disconnectWallet, walletConnected } = useNetwork();

  return (
    <div>
      {walletConnected ? (
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
