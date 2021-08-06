const NETWORK_STORAGE = 'networkStorage';

let networkId;

if (localStorage) {
  try {
    networkId = localStorage.getItem(NETWORK_STORAGE);
    if (!networkId) {
      networkId = 56;
    }
  } catch (e) {}
}

const useNetworkIdStorage = () => {
  const saveData = () => {
    if (localStorage) {
      try {
        localStorage.setItem(NETWORK_STORAGE, networkId);
      } catch (e) {}
    }
  };

  const setStorage = value => {
    networkId = value;
    saveData();
  };

  const getStorage = () => {
    return networkId;
  };

  return { getStorage, setStorage };
};

export default useNetworkIdStorage;
