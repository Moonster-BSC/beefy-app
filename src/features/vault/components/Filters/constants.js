import { getNetworkPools } from '../../../helpers/getNetworkData';

const unique = (networkId, key) => [
  ...new Set(
    getNetworkPools(networkId)
      .map(pool => pool[key])
      .flat()
      .filter(data => data !== undefined)
      .sort()
  ),
];

export const getUniqueAssets = networkId => unique(networkId, 'assets');
export const getUniquePlatforms = networkId => unique(networkId, 'platform');
