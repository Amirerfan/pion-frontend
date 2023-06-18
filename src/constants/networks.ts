import { StaticJsonRpcProvider } from '@ethersproject/providers';

import { SupportedChainId } from './chains';

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.BSCMAINNET]: 'https://bsc.publicnode.com',
  [SupportedChainId.BSCTESTNET]: 'https://bsc-testnet.publicnode.com',
};

export const RPC_PROVIDERS = Object.keys(RPC_URLS).reduce((acc, key) => {
  const chainId = Number(key) as SupportedChainId;
  acc[chainId] = new StaticJsonRpcProvider(RPC_URLS[chainId]);
  return acc;
}, {} as { [key in SupportedChainId]: StaticJsonRpcProvider });
