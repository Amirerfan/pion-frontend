import { JsonRpcProvider } from '@ethersproject/providers';
import { RPC_URLS } from './networks.ts';

import { SupportedChainId } from './chains';

export const Providers: { [key in SupportedChainId]: JsonRpcProvider } = {
  [SupportedChainId.BSCMAINNET]: new JsonRpcProvider(
    RPC_URLS[SupportedChainId.BSCMAINNET],
  ),
  [SupportedChainId.BSCTESTNET]: new JsonRpcProvider(
    RPC_URLS[SupportedChainId.BSCTESTNET],
  ),
};
