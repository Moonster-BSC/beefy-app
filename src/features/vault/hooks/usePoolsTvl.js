import BigNumber from 'bignumber.js';
import { useState, useEffect } from 'react';
import { byDecimals } from '../../helpers/bignumber';

const usePoolsTvl = pools => {
  const [poolsTvl, setPoolsTvl] = useState(0);

  useEffect(() => {
    let globalTvl = 0;

    pools
      .filter(p => p.status === 'active')
      .filter(isUniqueEarnContract)
      .forEach(({ tvl, oraclePrice }) => {
        globalTvl += tvl * oraclePrice;
      });

    setPoolsTvl(globalTvl);
  }, [pools]);

  return { poolsTvl };
};

const getEarnedTokenBalance = (pool, tokens) => {
  let tokenBalance = new BigNumber(0);
  if (tokens[pool.token] && tokens[pool.token].tokenBalance) {
    tokenBalance = new BigNumber(tokens[pool.token].tokenBalance);
  }
  return tokenBalance;
};

const useUserTvl = (pools, tokens) => {
  const [userTvl, setUserTvl] = useState(0);

  useEffect(() => {
    let userTvl = 0;

    pools.filter(isUniqueEarnContract).forEach(pool => {
      const earnedTokenBalance = getEarnedTokenBalance(pool, tokens);
      const sharesBalance = new BigNumber(earnedTokenBalance);
      if (sharesBalance > 0) {
        const deposited = byDecimals(
          sharesBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)),
          pool.tokenDecimals
        );
        userTvl += deposited * pool.oraclePrice;
      }
    });

    setUserTvl(userTvl);
  }, [pools, tokens]);

  return { userTvl };
};

const isUniqueEarnContract = (pool, index, pools) => {
  const earnContractAddress = pool.earnContractAddress;
  return pools.findIndex(p => p.earnContractAddress === earnContractAddress) === index;
};

export { usePoolsTvl, useUserTvl };
