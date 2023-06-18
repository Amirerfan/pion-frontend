import { createContext, ReactNode, useMemo } from 'react';

import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Connector } from '@web3-react/types';
import { Web3Provider as a } from '@ethersproject/providers';

import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { Connection } from '../../connection';
import { getConnectionName } from '../../connection/utils';
import useEagerlyConnect from '../../hooks/useEagerlyConnect';
import useOrderedConnections from '../../hooks/useOrderedConnections';

const Web3Context = createContext({});

const Web3Provider = ({ children }: { children: ReactNode }) => {
  const { chains, publicClient } = configureChains(
    [bscTestnet],
    [publicProvider()],
  );

  useEagerlyConnect();
  const connections = useOrderedConnections();
  const web3ReactConnectors: [Connector, Web3ReactHooks][] = connections.map(
    ({ hooks, connector }) => [connector, hooks],
  );

  const { connectors } = getDefaultWallets({
    appName: 'PION',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  const key = useMemo(
    () =>
      connections
        .map(({ type }: Connection) => getConnectionName(type))
        .join('-'),
    [connections],
  );

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Web3ReactProvider connectors={web3ReactConnectors} key={key}>
          <Web3Context.Provider value={{}}>{children}</Web3Context.Provider>
        </Web3ReactProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export { Web3Provider, Web3Context };
