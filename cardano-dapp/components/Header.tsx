
import WalletConnector from './WalletConnector';
import NetworkSelector from './NetworkSelector';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-16 h-16 bg-white border-b flex items-center justify-between px-6 z-10">
      <h1 className="text-xl font-bold">Cardano dApp</h1>
      <div className="flex items-center space-x-4">
        <NetworkSelector />
        <WalletConnector />
      </div>
    </header>
  );
}
