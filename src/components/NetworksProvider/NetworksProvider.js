import useNetworkIdStorage from 'features/home/hooks/useNetworkIdStorage';
import React, { createContext, useContext, useState, useMemo } from 'react';

// const { getStorage } = useNetworkIdStorage();

const networks = {
  56: {
    name: 'BSC',
    asset: 'BNB',
    id: '56',
    url: 'https://app.beefy.finance',
  },
  128: {
    name: 'HECO',
    asset: 'HECO',
    id: '128',
    url: 'https://heco.beefy.finance',
  },
  43114: {
    name: 'AVALANCHE',
    asset: 'AVAX',
    id: '43114',
    url: 'https://avax.beefy.finance',
  },
  137: {
    name: 'POLYGON',
    asset: 'POLYGON',
    id: '137',
    url: 'https://polygon.beefy.finance',
  },
  250: {
    name: 'FANTOM',
    asset: 'FANTOM',
    id: '250',
    url: 'https://fantom.beefy.finance',
  },
};

// export const NetworksContext = createContext({
//   currentNetwork: networks.find(network => network.id === getStorage()),
// });

export const NetworksContext = createContext(null);

const NetworksProvider = ({ children }) => {
  const { getStorage } = useNetworkIdStorage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const networkId = getStorage();
  const initNetwork = networks[networkId];

  const [currentNetwork, setCurrentNetwork] = useState(initNetwork);

  // to preserve back compat across app
  const networksList = Object.values(networks);

  return (
    <NetworksContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        networks: networksList,
        currentNetwork,
        setCurrentNetwork,
      }}
    >
      {children}
    </NetworksContext.Provider>
  );
};

export const useNetworks = () => {
  const context = useContext(NetworksContext);

  return context;
};

export default NetworksProvider;
