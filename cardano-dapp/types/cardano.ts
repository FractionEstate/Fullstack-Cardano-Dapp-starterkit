import { Blaze } from '@blaze-cardano/sdk';
import { U5C } from '@utxorpc/blaze-provider';
import type { Wallet } from '@blaze-cardano/sdk';

export type NetworkType = 'preview' | 'preprod' | 'mainnet';

export interface NetworkInfo {
  blockNo: number;
  hash: string;
  slot: number;
}

export interface WalletState {
  isConnected: boolean;
  address?: string;
  balance?: bigint;
}

export interface NetworkContextType {
  network: NetworkType;
  setNetwork: (network: NetworkType) => void;
  blaze: Blaze<U5C, Wallet> | null;
  walletState: WalletState;
  connect: () => Promise<void>;
  disconnect: () => void;
}
