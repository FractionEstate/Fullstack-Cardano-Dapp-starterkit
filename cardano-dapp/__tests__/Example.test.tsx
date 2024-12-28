import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NetworkProvider } from '../contexts/NetworkContext';
import WalletConnector from '../components/WalletConnector';

describe('WalletConnector', () => {
  test('renders Connect Wallet button when wallet is not connected', () => {
    render(
      <NetworkProvider>
        <WalletConnector />
      </NetworkProvider>
    );

    const connectButton = screen.getByText('Connect Wallet');
    expect(connectButton).toBeInTheDocument();
  });

  test('renders Disconnect Wallet button when wallet is connected', () => {
    render(
      <NetworkProvider>
        <WalletConnector />
      </NetworkProvider>
    );

    const connectButton = screen.getByText('Connect Wallet');
    fireEvent.click(connectButton);

    const disconnectButton = screen.getByText('Disconnect Wallet');
    expect(disconnectButton).toBeInTheDocument();
  });
});