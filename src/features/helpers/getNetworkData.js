import { connectors } from 'web3modal';
import { indexBy } from './utils';
import WalletConnectProvider from '@walletconnect/web3-provider';

import {
  avalanchePools,
  avalancheStakePools,
  avaxAddressBook,
  avalancheZaps,
  bscPools,
  bscStakePools,
  bscAddressBook,
  bscZaps,
  fantomPools,
  fantomStakePools,
  fantomAddressBook,
  fantomZaps,
  hecoPools,
  hecoStakePools,
  hecoAddressBook,
  hecoZaps,
  nativeCoins,
  polygonPools,
  polygonStakePools,
  polygonAddressBook,
  polygonZaps,
} from '../configure';

import { getEligibleZap } from 'features/zap/zapUniswapV2';

const networkTxUrls = {
  56: hash => `https://bscscan.com/tx/${hash}`,
  128: hash => `https://hecoinfo.com/tx/${hash}`,
  43114: hash => `https://cchain.explorer.avax.network/tx/${hash}/token-transfers`,
  137: hash => `https://polygonscan.com/tx/${hash}`,
  250: hash => `https://ftmscan.com/tx/${hash}`,
};

const networkAppUrls = {
  56: 'https://app.beefy.finance/',
  128: 'https://heco.beefy.finance/',
  43114: 'https://avax.beefy.finance/',
  137: 'https://polygon.beefy.finance/',
  250: 'https://fantom.beefy.finance/',
};

const networkFriendlyName = {
  56: 'BSC',
  128: 'HECO',
  43114: 'AVAX',
  137: 'Polygon',
  250: 'Fantom',
};

const networkBuyUrls = {
  56: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
  128: 'https://ht.mdex.com/#/swap?inputCurrency=0xa71edc38d189767582c38a3145b5873052c3e47a&outputCurrency=0x765277eebeca2e31912c9946eae1021199b39c61',
  137: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
  250: 'https://spookyswap.finance/swap?inputCurrency=0x04068da6c83afcfa0e13ba15a6696662335d5b75&outputCurrency=0xd6070ae98b8069de6B494332d1A1a81B6179D960',
  43114: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
};

export const getNetworkCoin = networkId => {
  return nativeCoins.find(coin => coin.chainId === networkId);
};

export const getNetworkPools = networkId => {
  let pools = [];
  switch (networkId) {
    case 56:
      pools = bscPools;
      break;
    case 128:
      pools = hecoPools;
      break;
    case 43114:
      pools = avalanchePools;
      break;
    case 137:
      pools = polygonPools;
      break;
    case 250:
      pools = fantomPools;
      break;
    default:
      pools = [];
      break;
  }

  // fill in missing data, like used to happen in init state

  const updatedPools = pools.map(pool => {
    if (!pool.withdrawalFee) pool.withdrawalFee = '0.1%';
    if (!pool.depositFee) pool.depositFee = '0%';

    const zap = getEligibleZap(pool, networkId);
    pool['zap'] = zap;
    return pool;
  });

  return updatedPools;
};

export const getNetworkVaults = networkId => {
  switch (networkId) {
    case 56:
      return indexBy(bscPools, 'id');
    case 128:
      return indexBy(hecoPools, 'id');
    case 43114:
      return indexBy(avalanchePools, 'id');
    case 137:
      return indexBy(polygonPools, 'id');
    case 250:
      return indexBy(fantomPools, 'id');
    default:
      return {};
  }
};

export const getNetworkLaunchpools = networkId => {
  switch (networkId) {
    case 56:
      return indexBy(bscStakePools, 'id');
    case 128:
      return indexBy(hecoStakePools, 'id');
    case 43114:
      return indexBy(avalancheStakePools, 'id');
    case 137:
      return indexBy(polygonStakePools, 'id');
    case 250:
      return indexBy(fantomStakePools, 'id');
    default:
      return {};
  }
};

export const getNetworkAddressBookTokens = networkId => {
  let tokens = {};
  switch (networkId) {
    case 56:
      tokens = bscAddressBook.tokens;
      break;
    case 128:
      tokens = hecoAddressBook.tokens;
      break;
    case 43114:
      tokens = avaxAddressBook.tokens;
      break;
    case 137:
      tokens = polygonAddressBook.tokens;
      break;
    case 250:
      tokens = fantomAddressBook.tokens;
      break;
    default:
      throw new Error(
        `Create address book for this chainId first. Check out https://github.com/beefyfinance/address-book`
      );
  }
  return tokens;
};

export const getNetworkTokens = networkId => {
  let tokens = getNetworkAddressBookTokens(networkId);

  // fill in rest of info from state

  const pools = getNetworkPools(networkId);
  pools.forEach(
    (
      {
        token,
        tokenDecimals,
        tokenAddress,
        earnedToken,
        earnContractAddress,
        earnedTokenAddress,
        withdrawalFee,
        depositFee,
      },
      i
    ) => {
      // if (!withdrawalFee) pools[i].withdrawalFee = '0.1%';
      // if (!depositFee) pools[i].depositFee = '0%';

      tokens[token] = {
        ...tokens[token],
        decimals: tokenDecimals,
        tokenAddress: tokenAddress,
        tokenBalance: 0,
        allowance: {
          ...tokens[token]?.allowance,
          [earnContractAddress]: tokenAddress ? 0 : Infinity,
        },
      };
      tokens[earnedToken] = {
        ...tokens[earnedToken],
        decimals: 18,
        tokenAddress: earnedTokenAddress,
        tokenBalance: 0,
        allowance: {
          [earnContractAddress]: 0,
        },
      };

      const zap = getEligibleZap(pools[i], networkId, tokens);
      if (zap) {
        tokens[token].allowance[zap.zapAddress] = tokenAddress ? 0 : Infinity;
        tokens[earnedToken].allowance[zap.zapAddress] = 0;
        // pools[i]['zap'] = zap;
      }
    }
  );

  return tokens;
};

export const getNetworkBurnTokens = networkId => {
  switch (networkId) {
    case 56:
      return {
        [bscAddressBook.tokens.GARUDA.symbol]: bscAddressBook.tokens.GARUDA,
        [bscAddressBook.tokens.SDUMP.symbol]: bscAddressBook.tokens.SDUMP,
        // [bscAddressBook.tokens.BABYCAKE.symbol]: bscAddressBook.tokens.BABYCAKE,
      };
    case 128:
      return {};
    case 43114:
      return {};
    case 137:
      return {
        [polygonAddressBook.tokens.xYELD.symbol]: polygonAddressBook.tokens.xYELD,
      };
    case 250:
      return {};
    default:
      throw new Error(`Create address book for this chainId first.`);
  }
};

export const getNetworkZaps = networkId => {
  switch (networkId) {
    case 56:
      return bscZaps;
    case 128:
      return hecoZaps;
    case 43114:
      return avalancheZaps;
    case 137:
      return polygonZaps;
    case 250:
      return fantomZaps;
    default:
      return [];
  }
};

export const getNetworkStables = networkId => {
  switch (networkId) {
    case 56:
      return [
        'BUSD',
        'USDT',
        'USDC',
        'DAI',
        'VAI',
        'QUSD',
        'UST',
        'VENUS BLP',
        '3EPS',
        'fUSDT',
        '4BELT',
        'IRON',
        'DOLLY',
        'TUSD',
        'USDN',
      ];
    case 128:
      return ['USDT', 'HUSD'];
    case 43114:
      return ['USDT', 'DAI', 'BUSD', 'zDAI', 'zUSDT'];
    case 137:
      return ['USDC', 'USDT', 'maUSDC', 'DAI', 'IRON', 'MAI', 'FRAX', 'rUSD', 'UST'];
    case 250:
      return ['USDC', 'USDT', 'DAI', 'fUSDT'];
    default:
      return [];
  }
};

export const getNetworkMulticall = networkId => {
  switch (networkId) {
    case 56:
      return '0xB94858b0bB5437498F5453A16039337e5Fdc269C';
    case 128:
      return '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e';
    case 43114:
      return '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76';
    case 137:
      return '0xC3821F0b56FA4F4794d5d760f94B812DE261361B';
    case 250:
      return '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982';
    default:
      return '';
  }
};

export const getNetworkConnectors = t => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return {
        network: 'binance',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                1: 'https://bsc-dataseed.binance.org/',
                56: 'https://bsc-dataseed.binance.org/',
              },
            },
          },
          'custom-binance': {
            display: {
              name: 'Binance',
              description: t('Binance Chain Wallet'),
              logo: require(`images/wallets/binance-wallet.png`),
            },
            package: 'binance',
            connector: async (ProviderPackage, options) => {
              const provider = window.BinanceChain;
              await provider.enable();
              return provider;
            },
          },
          'custom-math': {
            display: {
              name: 'Math',
              description: t('Math Wallet'),
              logo: require(`images/wallets/math-wallet.svg`),
            },
            package: 'math',
            connector: connectors.injected,
          },
          'custom-twt': {
            display: {
              name: 'Trust',
              description: t('Trust Wallet'),
              logo: require(`images/wallets/trust-wallet.svg`),
            },
            package: 'twt',
            connector: connectors.injected,
          },
          'custom-safepal': {
            display: {
              name: 'SafePal',
              description: t('SafePal App'),
              logo: require(`images/wallets/safepal-wallet.svg`),
            },
            package: 'safepal',
            connector: connectors.injected,
          },
        },
      };
    case '128':
      return {
        network: 'heco',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          // walletconnect: {
          //   package: WalletConnectProvider,
          //   options: {
          //     rpc: {
          //       1: 'https://http-mainnet.hecochain.com',
          //       128: 'https://http-mainnet.hecochain.com',
          //     },
          //   },
          // },
          'custom-math': {
            display: {
              name: 'Math',
              description: t('Math Wallet'),
              logo: require(`images/wallets/math-wallet.svg`),
            },
            package: 'math',
            connector: connectors.injected,
          },
        },
      };
    case '43114':
      return {
        network: 'avalanche',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          // walletconnect: {
          //   package: WalletConnectProvider,
          //   options: {
          //     rpc: {
          //       1: 'https://api.avax.network/ext/bc/C/rpc',
          //       43114: 'https://api.avax.network/ext/bc/C/rpc',
          //     },
          //   },
          // },
        },
      };
    case '137':
      return {
        network: 'polygon',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              network: 'matic',
              rpc: {
                1: 'https://rpc-mainnet.maticvigil.com/',
                137: 'https://rpc-mainnet.maticvigil.com/',
              },
            },
          },
        },
      };
    case '250':
      return {
        network: 'fantom',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          // walletconnect: {
          //   package: WalletConnectProvider,
          //   options: {
          //     rpc: {
          //       1: 'https://rpcapi.fantom.network',
          //       250: 'https://rpcapi.fantom.network',
          //     },
          //   },
          // },
        },
      };
    default:
      return {};
  }
};

export const getNetworkTxUrl = networkTxUrls[process.env.REACT_APP_NETWORK_ID];
export const getNetworkFriendlyName = (networkId = process.env.REACT_APP_NETWORK_ID) =>
  networkFriendlyName[networkId];
export const getNetworkBuyUrl = (networkId = process.env.REACT_APP_NETWORK_ID) =>
  networkBuyUrls[networkId];
export const getNetworkAppUrl = (networkId = process.env.REACT_APP_NETWORK_ID) =>
  networkAppUrls[networkId];

export const launchpools = getNetworkLaunchpools();
export const vaults = getNetworkVaults();
