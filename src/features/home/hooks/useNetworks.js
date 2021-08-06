import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// const { getStorage } = useNetworkIdStorage();

const networks = {
  56: {
    name: 'BSC',
    asset: 'BNB',
    id: '56',
  },
  128: {
    name: 'HECO',
    asset: 'HECO',
    id: '128',
  },
  43114: {
    name: 'AVALANCHE',
    asset: 'AVAX',
    id: '43114',
  },
  137: {
    name: 'POLYGON',
    asset: 'POLYGON',
    id: '137',
  },
  250: {
    name: 'FANTOM',
    asset: 'FANTOM',
    id: '250',
  },
};

export const useNetworks = () => {
  const { networkId } = useSelector(
    state => ({
      networkId: state.home.networkId,
    }),
    shallowEqual
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const initNetwork = networks[networkId];

  const [currentNetwork, setCurrentNetwork] = useState(initNetwork);

  // to preserve back compat across app
  const networksList = Object.values(networks);

  return {
    isModalOpen,
    openModal,
    closeModal,
    networks: networksList,
    currentNetwork,
    setCurrentNetwork,
  };
};
