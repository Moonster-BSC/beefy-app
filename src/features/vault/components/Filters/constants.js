import { getNetworkPoolsAndTokens } from '../../../helpers/getNetworkData';

const unique = (networkId, key) => {
  const { pools, tokens } = getNetworkPoolsAndTokens(networkId);
  const ret = [
    ...new Set(
      pools
        .map(pool => pool[key])
        .flat()
        .filter(data => data !== undefined)
        .sort()
    ),
  ];
  return ret;
};

export const getUniqueAssets = networkId => unique(networkId, 'assets');
export const getUniquePlatforms = networkId => unique(networkId, 'platform');
