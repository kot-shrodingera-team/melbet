import clearCouponGenerator from '@kot-shrodingera-team/germes-generators/show_stake/clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
import getMaximumStake from '../stake_info/getMaximumStake';

const clearCoupon = clearCouponGenerator({
  clearMode: 'all-only',
  clearAllSelector: '.del-all',
  clearSingleSelector: '',
  getStakeCount,
  maxUnload: {
    getMaximumStake,
  },
});

export default clearCoupon;
