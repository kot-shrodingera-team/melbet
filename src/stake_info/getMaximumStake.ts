import getMaximumStakeGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';

const getMaximumStake = getMaximumStakeGenerator({
  maximumStakeSelector: '#summ_max',
});

export default getMaximumStake;
