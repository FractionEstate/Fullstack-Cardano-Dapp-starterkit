import React from 'react';
import { useNetwork } from '../contexts/NetworkContext';

const WalletConnector: React.FC = () => {
  const { walletState, connect, disconnect } = useNetwork();

  return (
    <div>
      {walletState.isConnected ? (
        <button onClick={disconnect}>Disconnect Wallet</button>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;
