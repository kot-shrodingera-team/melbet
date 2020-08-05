import { getStakeCountGenerator } from '@kot-shrodingera-team/germes-generators/stake_info';

const getStakeCount = getStakeCountGenerator({
  stakeElementSelector: '.cuponBetList li',
});

export default getStakeCount;
