import { useCallback } from 'react';
import { useNetwork } from '../contexts/NetworkContext';

export default function WalletConnector() {
  const { walletState, connect, disconnect } = useNetwork();

  const handleClick = useCallback(async () => {
    if (walletState.isConnected) {
      disconnect();
    } else {
      await connect();
    }
  }, [walletState.isConnected, connect, disconnect]);

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
    >
      {walletState.isConnected ? 'Disconnect' : 'Connect Wallet'}
      {walletState.address && (
        <span className="ml-2 text-sm">
          ({walletState.address.slice(0, 8)}...{walletState.address.slice(-8)})
        </span>
      )}
    </button>
  );
}
