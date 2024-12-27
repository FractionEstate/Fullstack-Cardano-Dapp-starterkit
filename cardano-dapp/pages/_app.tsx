import React from 'react';
import { AppProps } from 'next/app';
import { NetworkProvider } from '../contexts/NetworkContext';
import '../styles/globals.css';

/**
 * Custom App component to initialize pages with NetworkProvider.
 * @param {AppProps} props - The properties for the App component.
 * @returns {React.JSX.Element} The wrapped component with NetworkProvider.
 */
const MyApp = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  return (
    <NetworkProvider>
      <Component {...pageProps} />
    </NetworkProvider>
  );
};

export default MyApp;
