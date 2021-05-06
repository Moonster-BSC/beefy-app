const elkPools = [
  {
    id: 'elk-matic-elk',
    logo: 'polygon/elk/MATIC-ELK.png',
    name: 'MATIC-ELK LP',
    token: 'MATIC-ELK QLP',
    tokenDescription: 'Elk',
    tokenAddress: '0xa7c7d39c5102b65557c7c494d033385215652e11',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooElkMATIC-ELK',
    earnedTokenAddress: '0x850917f4EcC8d3B5bA040e190b08B380602a934e',
    earnContractAddress: '0x850917f4EcC8d3B5bA040e190b08B380602a934e',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'elk-matic-elk',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Elk',
    assets: ['MATIC', 'ELK'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.elk.finance/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0xe1c8f3d529bea8e3fa1fac5b416335a2f998ee1c',
    buyTokenUrl:
      'https://app.elk.finance/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0xe1c8f3d529bea8e3fa1fac5b416335a2f998ee1c',
  }
]  

export const polygonPools = [
  {
    id: 'quick-usdc-usdt',
    logo: 'polygon/USDC-USDT.png',
    name: 'USDC-USDT LP',
    token: 'USDC-USDT QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x2cf7252e74036d1da831d11089d326296e64a728',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickUSDC-USDT',
    earnedTokenAddress: '0x4462817b53E76b722c2D174D0148ddb81452f1dE',
    earnContractAddress: '0x4462817b53E76b722c2D174D0148ddb81452f1dE',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['USDC', 'USDT'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  },
  {
    id: 'cometh-must-eth',
    logo: 'polygon/MUST-ETH.png',
    name: 'MUST-ETH LP',
    token: 'MUST-ETH LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x8826C072657983939c26E684edcfb0e4133f0B3d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethMUST-ETH',
    earnedTokenAddress: '0x7CE2332fAF6328986C75e3A8fCc1CB79621aeB1F',
    earnContractAddress: '0x7CE2332fAF6328986C75e3A8fCc1CB79621aeB1F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-must-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['MUST', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
  },
  {
    id: 'quick-eth-btc',
    logo: 'polygon/ETH-BTC.png',
    name: 'wBTC-ETH LP',
    token: 'wBTC-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xdc9232e2df177d7a12fdff6ecbab114e2231198d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickwBTC-ETH',
    earnedTokenAddress: '0xf26607237355D7c6183ea66EC908729E9c6eEB6b',
    earnContractAddress: '0xf26607237355D7c6183ea66EC908729E9c6eEB6b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['wBTC', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  },
  {
    id: 'quick-ubt-eth',
    logo: 'polygon/UBT-ETH.png',
    name: 'UBT-ETH LP',
    token: 'UBT-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xcc203f45A31aE086218170F6A9e9623fA1655486',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickUBT-ETH',
    earnedTokenAddress: '0x942aa6324E5D0C102d3Ad6607495ac5e798a991a',
    earnContractAddress: '0x942aa6324E5D0C102d3Ad6607495ac5e798a991a',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-ubt-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['UBT', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x7FBc10850caE055B27039aF31bD258430e714c62',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x7FBc10850caE055B27039aF31bD258430e714c62',
  },
  {
    id: 'quick-defi5-eth',
    logo: 'polygon/DEFI5-ETH.png',
    name: 'DEFI5-ETH LP',
    token: 'DEFI5-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x654E651b658f784406125400cf648588CB9773e8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickDEFI5-ETH',
    earnedTokenAddress: '0x53e674D5cC969930420d73E4b79Ee0D46cCdf6c4',
    earnContractAddress: '0x53e674D5cC969930420d73E4b79Ee0D46cCdf6c4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-defi5-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['DEFI5', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x42435F467D33e5C4146a4E8893976ef12BBCE762',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x42435F467D33e5C4146a4E8893976ef12BBCE762',
  },
  {
    id: 'quick-wise-eth',
    logo: 'polygon/WISE-ETH.png',
    name: 'WISE-ETH LP',
    token: 'WISE-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xDF8139e9BebecAdEcF48BeC8c8064CcEfB618e2b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickWISE-ETH',
    earnedTokenAddress: '0x76cE86B1e1b7a3983B26F7E57B2A0C8896f7eB0D',
    earnContractAddress: '0x76cE86B1e1b7a3983B26F7E57B2A0C8896f7eB0D',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-wise-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['WISE', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a',
  },
  {
    id: 'quick-cel-eth',
    logo: 'polygon/CEL-ETH.png',
    name: 'CEL-ETH LP',
    token: 'CEL-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xEAA5E4620373d9Ded4DCB9267F46fcfc6698c867',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickCEL-ETH',
    earnedTokenAddress: '0xeF1870FddC25586636bf8a3d7cCf4d298f6E072e',
    earnContractAddress: '0xeF1870FddC25586636bf8a3d7cCf4d298f6E072e',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-cel-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['CEL', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6',
  },
  {
    id: 'quick-quick-eth',
    logo: 'polygon/QUICK-ETH.png',
    name: 'QUICK-ETH LP',
    token: 'QUICK-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x1Bd06B96dd42AdA85fDd0795f3B4A79DB914ADD5',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickQUICK-ETH',
    earnedTokenAddress: '0x66df1B2d22759D03A9f37BAaAc826089e56a5936',
    earnContractAddress: '0x66df1B2d22759D03A9f37BAaAc826089e56a5936',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-quick-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['QUICK', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
    id: 'quick-mausdc-usdc',
    logo: 'polygon/maUSDC-USDC.png',
    name: 'maUSDC-USDC LP',
    token: 'maUSDC-USDC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x7295304b10740BA8e037826787d3e9386FD99925',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickmaUSDC-USDC',
    earnedTokenAddress: '0x8c2d54BA94f4638f1bb91f623F378B66d6023324',
    earnContractAddress: '0x8c2d54BA94f4638f1bb91f623F378B66d6023324',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-mausdc-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['maUSDC', 'USDC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x9719d867A500Ef117cC201206B8ab51e794d3F82/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0x9719d867a500ef117cc201206b8ab51e794d3f82',
  },
  {
    id: 'quick-aave-eth',
    logo: 'polygon/AAVE-ETH.png',
    name: 'AAVE-ETH LP',
    token: 'AAVE-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x90bc3E68Ba8393a3Bf2D79309365089975341a43',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickAAVE-ETH',
    earnedTokenAddress: '0x752948B4493d2Ee09c95F944A76005aEBF410087',
    earnContractAddress: '0x752948B4493d2Ee09c95F944A76005aEBF410087',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-aave-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['AAVE', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0xD6DF932A45C0f255f85145f286eA0b292B21C90B&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'quick-link-eth',
    logo: 'polygon/LINK-ETH.png',
    name: 'LINK-ETH LP',
    token: 'LINK-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x5cA6CA6c3709E1E6CFe74a50Cf6B2B6BA2Dadd67',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickLINK-ETH',
    earnedTokenAddress: '0xaB4105375FbE5F502B0da986F46ADf7a21762e52',
    earnContractAddress: '0xaB4105375FbE5F502B0da986F46ADf7a21762e52',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-link-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['LINK', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'krill-krill-usdc',
    logo: 'polygon/KRILL-USDC.png',
    name: 'KRILL-USDC LP',
    token: 'KRILL-USDC LP',
    tokenDescription: 'Polywhale',
    tokenAddress: '0x6405Ebc22cB0899FC21f414085Ac4044B4721a0d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooPolywhaleKRILL-USDC',
    earnedTokenAddress: '0x74907ad4E79b1Ce415caB26FEf526ae017598cEe',
    earnContractAddress: '0x74907ad4E79b1Ce415caB26FEf526ae017598cEe',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'krill-krill-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Polywhale',
    assets: ['KRILL', 'USDC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x05089c9ebffa4f0aca269e32056b1b36b37ed71b&outputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  },
  {
    id: 'quick-eth-usdt',
    logo: 'polygon/ETH-USDT.png',
    name: 'ETH-USDT LP',
    token: 'ETH-USDT QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xF6422B997c7F54D1c6a6e103bcb1499EeA0a7046',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickETH-USDT',
    earnedTokenAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    earnContractAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ETH', 'USDT'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  },
  {
    id: 'quick-eth-matic',
    logo: 'polygon/ETH-MATIC.png',
    name: 'ETH-MATIC LP',
    token: 'ETH-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickETH-MATIC',
    earnedTokenAddress: '0x8b89477dFde285849E1B07947E25012206F4D674',
    earnContractAddress: '0x8b89477dFde285849E1B07947E25012206F4D674',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ETH', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=ETH',
  },
  {
    id: 'quick-quick-matic',
    logo: 'polygon/QUICK-MATIC.png',
    name: 'QUICK-MATIC LP',
    token: 'QUICK-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x019ba0325f1988213D448b3472fA1cf8D07618d7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickQUICK-MATIC',
    earnedTokenAddress: '0xa008B727ddBa283Ddb178b47BB227Cdbea5C1bfD',
    earnContractAddress: '0xa008B727ddBa283Ddb178b47BB227Cdbea5C1bfD',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-quick-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['QUICK', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
    id: 'cometh-eth-matic',
    logo: 'polygon/ETH-MATIC.png',
    name: 'ETH-MATIC LP',
    token: 'ETH-MATIC LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x462390EA53F70F7570EEB2002c0150aF519f93A9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethETH-MATIC',
    earnedTokenAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
    earnContractAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-eth-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['ETH', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  },
  {
    id: 'cometh-matic-must',
    logo: 'polygon/MUST-MATIC.png',
    name: 'MUST-MATIC LP',
    token: 'MUST-MATIC LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x80676b414a905De269D0ac593322Af821b683B92',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethMUST-MATIC',
    earnedTokenAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
    earnContractAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-matic-must',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['MUST', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
  },
  {
    id: 'cometh-usdc-must',
    logo: 'polygon/USDC-MUST.png',
    name: 'USDC-MUST LP',
    token: 'USDC-MUST LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x12A2aBcFcADc04681929F0c199bDf812967207E4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethUSDC-MUST',
    earnedTokenAddress: '0x8a198BCbF313A5565c64A7Ed61FaA413eB4E0931',
    earnContractAddress: '0x8a198BCbF313A5565c64A7Ed61FaA413eB4E0931',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-usdc-must',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['USDC', 'MUST'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
  },
  ...elkPools,
];
