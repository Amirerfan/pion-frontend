import { createContext, ReactNode, useMemo, useState } from 'react';
import usePION from '../PION/usePION.ts';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import BONPION_API from '../../abis/BonPION.json';
import { BONPION_ADDRESS, PION_ADDRESS } from '../../constants/addresses.ts';
import { getCurrentChainId } from '../../constants/chains.ts';
import useUserProfile from '../UserProfile/useUserProfile.ts';

const CreateActionContext = createContext<{
  createAmount: string;
  createActionLoading: boolean;
  handleCreateAmountChange: (amount: string) => void;
  handleCreateBonPIONClicked: () => void;
}>({
  createAmount: '',
  createActionLoading: false,
  handleCreateAmountChange: () => {},
  handleCreateBonPIONClicked: () => {},
});

const CreateActionProvider = ({ children }: { children: ReactNode }) => {
  const { balance } = usePION();
  const { walletAddress } = useUserProfile();

  const [createActionLoading, setCreateActionLoading] = useState(false);
  const [createAmount, setCreateAmount] = useState('');
  const handleCreateAmountChange = (amount: string) => {
    setCreateAmount(amount.toString());
  };

  const mintAndLockArgs = useMemo(() => {
    return [[PION_ADDRESS[getCurrentChainId()]], [createAmount], walletAddress];
  }, [walletAddress, createAmount]);

  const { config } = usePrepareContractWrite({
    abi: BONPION_API,
    address: BONPION_ADDRESS[getCurrentChainId()],
    functionName: 'mintAndLock',
    args: mintAndLockArgs,
    chainId: getCurrentChainId(),
  });

  console.log('config', config);
  const { write } = useContractWrite(config);

  const handleCreateBonPIONClicked = () => {
    if (!balance || !createAmount || Number(createAmount) > Number(balance))
      return;
    setCreateActionLoading(true);
    console.log('write', write);
    write?.();
    setCreateActionLoading(false);
  };

  return (
    <CreateActionContext.Provider
      value={{
        createAmount,
        createActionLoading,
        handleCreateAmountChange,
        handleCreateBonPIONClicked,
      }}
    >
      {children}
    </CreateActionContext.Provider>
  );
};

export { CreateActionProvider, CreateActionContext };