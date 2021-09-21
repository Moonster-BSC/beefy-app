export const arbitrumPools = [
  {
    id: 'curve-arb-tricrypto',
    logo: 'uncategorized/ATRICRYPTO.png',
    name: 'TriCrypto',
    token: 'crv3crypto',
    tokenDescription: 'Curve',
    tokenAddress: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurveTriCrypto',
    earnedTokenAddress: '0xF26C10811D602e39580C9448944ddAe7b183fD95',
    earnContractAddress: '0xF26C10811D602e39580C9448944ddAe7b183fD95',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-tricrypto',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Curve',
    assets: ['USDT', 'WBTC', 'ETH'],
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/tricrypto/deposit',
  },
  {
    id: 'curve-arb-2pool',
    logo: 'uncategorized/crv2pool.png',
    name: 'USDC/USDT',
    token: '2CRV',
    tokenDescription: 'Curve',
    tokenAddress: '0x7f90122BF0700F9E7e1F688fe926940E8839F353',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurve2Pool',
    earnedTokenAddress: '0xEc7c0205a6f426c2Cb1667d783B5B4fD2f875434',
    earnContractAddress: '0xEc7c0205a6f426c2Cb1667d783B5B4fD2f875434',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-2pool',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Curve',
    assets: ['USDT', 'USDC'],
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/2pool/deposit',
  },
  {
    id: 'curve-arb-ren',
    logo: 'single-assets/renBTC.svg',
    name: 'WBTC/renBTC',
    token: 'btcCRV',
    tokenDescription: 'Curve',
    tokenAddress: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooCurveRenBTC',
    earnedTokenAddress: '0x14d07853560436aEe38BE12DD66d944B07D5E59F',
    earnContractAddress: '0x14d07853560436aEe38BE12DD66d944B07D5E59F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'curve-arb-ren',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Curve',
    assets: ['WBTC', 'renBTC'],
    withdrawalFee: '0.01%',
    addLiquidityUrl: 'https://arbitrum.curve.fi/ren/deposit',
  },
  {
    id: 'sushi-arb-wbtc-weth',
    name: 'WBTC-ETH LP',
    token: 'WBTC-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x515e252b2b5c22b4b2b6Df66c2eBeeA871AA4d69',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiWBTC-WETH',
    earnedTokenAddress: '0xfcDD5a02C611ba6Fe2802f885281500EC95805d7',
    earnContractAddress: '0xfcDD5a02C611ba6Fe2802f885281500EC95805d7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-wbtc-weth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Sushi',
    assets: ['WBTC', 'ETH'],
    addLiquidityUrl:
      'https://app.sushi.com/add/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  },
  {
    id: 'sushi-arb-sushi-eth',
    name: 'SUSHI-ETH LP',
    token: 'SUSHI-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0x3221022e37029923aCe4235D812273C5A42C322d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiSUSHI-WETH',
    earnedTokenAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    earnContractAddress: '0xBa5041B1c06e8c9cFb5dDB4b82BdC52E41EA5FC5',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-sushi-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Sushi',
    assets: ['SUSHI', 'ETH'],
    addLiquidityUrl:
      'https://app.sushi.com/add/0xd4d42f0b6def4ce0383636770ef773390d85c61a/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xd4d42f0b6def4ce0383636770ef773390d85c61af&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  },
  {
    id: 'sushi-arb-weth-usdt',
    name: 'USDT-ETH LP',
    token: 'USDT-ETH LP',
    tokenDescription: 'Sushi',
    tokenAddress: '0xCB0E5bFa72bBb4d16AB5aA0c60601c438F04b4ad',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDT-WETH',
    earnedTokenAddress: '0xE99c8A590c98c7Ae9FB3B7ecbC115D2eBD533B50',
    earnContractAddress: '0xE99c8A590c98c7Ae9FB3B7ecbC115D2eBD533B50',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-arb-weth-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Sushi',
    assets: ['USDT', 'ETH'],
    addLiquidityUrl:
      'https://app.sushi.com/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  },
];
