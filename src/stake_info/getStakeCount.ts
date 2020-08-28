import getStakeCountGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getStakeCount';

const getStakeCount = getStakeCountGenerator({
  stakeElementSelector: '.cuponBetList li',
});

export default getStakeCount;
