import React from 'react';
import { useNetwork } from '../contexts/NetworkContext';
import type { NetworkType } from '../types/cardano';

const NetworkSelector: React.FC = () => {
  const { network, setNetwork } = useNetwork();

  return (
    <div>
      <select
        value={network}
        onChange={(e) => setNetwork(e.target.value as NetworkType)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      >
        <option value="preview">Preview</option>
        <option value="preprod">Preprod</option>
        <option value="mainnet">Mainnet</option>
      </select>
    </div>
  );
};

export default NetworkSelector;
