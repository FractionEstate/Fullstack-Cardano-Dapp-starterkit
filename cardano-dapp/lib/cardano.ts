import { Blaze, Wallet } from '@blaze-cardano/sdk';
import { U5C } from '@utxorpc/blaze-provider';

/**
 * Type representing the different Cardano network types.
 */
export type NetworkType = 'preview' | 'preprod' | 'mainnet';

/**
 * Object containing the endpoints for each Cardano network type.
 */
const NETWORK_ENDPOINTS = {
  preview: process.env.NEXT_PUBLIC_PREVIEW_ENDPOINT || 'http://localhost:50051',
  preprod: process.env.NEXT_PUBLIC_PREPROD_ENDPOINT || 'http://localhost:50052',
  mainnet: process.env.NEXT_PUBLIC_MAINNET_ENDPOINT || 'http://localhost:50053'
} as const;

/**
 * Object to hold instances of Blaze for each network type.
 */
const blazeInstances: Record<NetworkType, Blaze<U5C, Wallet> | null> = {
  preview: null,
  preprod: null,
  mainnet: null
};

/**
 * Initializes the Cardano network.
 * @async
 * @returns {Promise<void>}
 */
export const initializeCardano = async (): Promise<void> => {
  try {
    const network: NetworkType = process.env.NEXT_PUBLIC_NETWORK as NetworkType || 'mainnet';
    const endpoint = NETWORK_ENDPOINTS[network];
    if (!endpoint) {
      throw new Error(`Invalid network type: ${network}`);
    }
    blazeInstances[network] = new Blaze<U5C, Wallet>(endpoint);
  } catch (error) {
    console.error('Failed to initialize Cardano:', error);
    throw error;
  }
};

/**
 * Retrieves information about the current network.
 * @async
 * @returns {Promise<void>}
 */
export const getNetworkInfo = async (): Promise<void> => {
  try {
    const network: NetworkType = process.env.NEXT_PUBLIC_NETWORK as NetworkType || 'mainnet';
    const instance = blazeInstances[network];
    if (!instance) {
      throw new Error('Blaze instance is not initialized.');
    }
    const info = await instance.getNetworkInfo();
    console.log('Network Info:', info);
  } catch (error) {
    console.error('Failed to get network info:', error);
    throw error;
  }
};

/**
 * Connects the wallet to the Cardano network.
 * @async
 * @returns {Promise<void>}
 */
export const connectWallet = async (): Promise<void> => {
  try {
    const network: NetworkType = process.env.NEXT_PUBLIC_NETWORK as NetworkType || 'mainnet';
    const instance = blazeInstances[network];
    if (!instance) {
      throw new Error('Blaze instance is not initialized.');
    }
    await instance.wallet.connectWallet();
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    throw error;
  }
};
