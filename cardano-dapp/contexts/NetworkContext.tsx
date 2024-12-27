import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initializeCardano } from '../lib/cardano';
import type { NetworkType, WalletState } from '../types/cardano';

interface NetworkContextProps {
  walletConnected: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const NetworkContext = createContext<NetworkContextProps | undefined>(undefined);

/**
 * NetworkProvider component to provide network context to its children.
 * @param {Object} props - The properties for the NetworkProvider component.
 * @param {ReactNode} props.children - The child components.
 * @returns {React.JSX.Element} The provider component with network context.
 */
export function NetworkProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [network, setNetwork] = useState<NetworkType>('preview');
  const [blaze, setBlaze] = useState<any | null>(null);
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false
  });
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const init = async () => {
      const blazeInstance = await initializeCardano();
      setBlaze(blazeInstance);
    };
    init().catch(console.error);
  }, [network]);

  const connectWallet = async () => {
    if (!blaze) return;
    try {
      // Implement wallet connection logic here
      setWalletState({ isConnected: true });
      setWalletConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setWalletState({ isConnected: false });
      setWalletConnected(false);
    }
  };

  const disconnectWallet = () => {
    setWalletState({ isConnected: false });
    setWalletConnected(false);
  };

  return (
    <NetworkContext.Provider 
      value={{ 
        walletConnected, 
        connectWallet, 
        disconnectWallet
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
}

/**
 * Custom hook to use the network context.
 * @returns {NetworkContextProps} The network context.
 * @throws Will throw an error if used outside of NetworkProvider.
 */
export function useNetwork(): NetworkContextProps {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
}
