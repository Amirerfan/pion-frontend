import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { BigNumber } from 'ethers';
import useUserProfile from '../UserProfile/useUserProfile.ts';
import { usePIONGetBalanceCallback } from '../../rpcs/PION/usePIONGetBalanceCallback.tsx';

const PIONContext = createContext<{
  PIONBalance: BigNumber | undefined;
}>({
  PIONBalance: undefined,
});

const PIONProvider = ({ children }: { children: ReactNode }) => {
  const { walletAddress, isConnected } = useUserProfile();

  const [PIONBalance, setPIONBalance] = useState<BigNumber | undefined>(
    undefined,
  );

  const { callback, state } = usePIONGetBalanceCallback();

  const getBalance = useCallback(async () => {
    try {
      console.log(callback, state);
      const response = await callback?.();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }, [callback, state]);

  useEffect(() => {
    if (isConnected && walletAddress) {
      getBalance();
    } else setPIONBalance(undefined);
  }, [walletAddress, isConnected, getBalance]);

  return (
    <PIONContext.Provider value={{ PIONBalance }}>
      {children}
    </PIONContext.Provider>
  );
};

export { PIONProvider, PIONContext };
