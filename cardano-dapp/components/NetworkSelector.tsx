import { useNetwork } from '../contexts/NetworkContext';
import type { NetworkType } from '../types/cardano';

export default function NetworkSelector() {
  const { network, setNetwork } = useNetwork();

  const networks: NetworkType[] = ['preview', 'preprod', 'mainnet'];

  return (
    <select
      value={network}
      onChange={(e) => setNetwork(e.target.value as NetworkType)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
    >
      {networks.map((net) => (
        <option key={net} value={net}>
          {net.charAt(0).toUpperCase() + net.slice(1)}
        </option>
      ))}
    </select>
  );
}
