'use client';

import { useEffect, useState } from 'react';
import { initializeCardano, getNetworkInfo, NetworkType } from '../lib/cardano';
import WalletConnect from '../components/WalletConnect';

export default function Home() {
  const [networkInfo, setNetworkInfo] = useState<any>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>('preview');

  useEffect(() => {
    const init = async () => {
      const blaze = await initializeCardano(selectedNetwork);
      const info = await getNetworkInfo(blaze);
      setNetworkInfo(info);
    };

    init().catch(console.error);
  }, [selectedNetwork]);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        Cardano Multi-Network DApp
      </h1>
      
      <WalletConnect />
      
      {networkInfo && (
        <div className="mt-4">
          <h2 className="text-xl">Network Status ({selectedNetwork})</h2>
          <pre>{JSON.stringify(networkInfo, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
