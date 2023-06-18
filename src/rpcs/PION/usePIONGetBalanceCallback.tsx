import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import {
  PIONBalanceOfTransactionInfo,
  TransactionType,
} from '../../state/transactions/types.ts';
import { usePIONContract } from '../../hooks/useContract.ts';
import usePIONTransaction from './usePIONTransaction.tsx';
import { CallbackState } from '../utils.ts';
import useUserProfile from '../../contexts/UserProfile/useUserProfile.ts';

export const usePIONGetBalanceCallback = () => {
  const { walletAddress } = useUserProfile();
  const { chainId, provider } = useWeb3React();

  console.log('usePIONGetBalanceCallback', walletAddress, chainId, provider);

  const PIONContract = usePIONContract();

  const calls = useMemo(() => {
    if (!PIONContract || !walletAddress) {
      return [];
    }

    console.log('walletAddress: ', walletAddress);
    const data = [
      {
        address: PIONContract.address,
        calldata:
          PIONContract.interface.encodeFunctionData('balanceOf', [
            walletAddress,
          ]) ?? '',
        value: '0x0',
      },
    ];
    console.log('data: ', data);
    return data;
  }, [walletAddress, PIONContract]);

  const info: PIONBalanceOfTransactionInfo = {
    type: TransactionType.BALANCE_OF,
  };

  const { callback } = usePIONTransaction(
    walletAddress,
    chainId,
    provider,
    calls,
    info,
  );

  return useMemo(() => {
    if (!provider || !walletAddress || !chainId || !callback) {
      return {
        state: CallbackState.INVALID,
        error: <div>Missing dependencies</div>,
      };
    }

    return {
      state: CallbackState.VALID,
      callback: async () => callback(),
    };
  }, [provider, walletAddress, chainId, callback]);
};
