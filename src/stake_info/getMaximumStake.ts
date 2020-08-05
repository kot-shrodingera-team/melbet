import { getMaximumStakeGenerator } from '@kot-shrodingera-team/germes-generators/stake_info';

const getMaximumStake = getMaximumStakeGenerator({
  maximumStakeElementSelector: '#summ_max',
});

export default getMaximumStake;
