import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 w-full text-left hover:bg-gray-700"
      >
        {isOpen ? '←' : '→'}
      </button>
      
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block hover:text-blue-400">
              {isOpen ? 'Home' : '🏠'}
            </Link>
          </li>
          <li>
            <Link href="/transactions" className="block hover:text-blue-400">
              {isOpen ? 'Transactions' : '💱'}
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block hover:text-blue-400">
              {isOpen ? 'Settings' : '⚙️'}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
