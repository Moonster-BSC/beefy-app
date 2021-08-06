import { reducer as connectWalletReducer } from './connectWallet';
import { reducer as disconnectWalletReducer } from './disconnectWallet';
import useNetworkIdStorage from 'features/home/hooks/useNetworkIdStorage';

const { getStorage } = useNetworkIdStorage();

const reducers = [connectWalletReducer, disconnectWalletReducer];
const initNetworkId = getStorage();

const initialState = {
  address: '',
  web3: null,
  connected: false,
  networkId: initNetworkId,
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
