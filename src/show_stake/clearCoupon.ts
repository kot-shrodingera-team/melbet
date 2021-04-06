import clearCouponGenerator from '@kot-shrodingera-team/germes-generators/show_stake/clearCoupon';
import { awaiter, log } from '@kot-shrodingera-team/germes-utils';
import getStakeCount from '../stake_info/getStakeCount';
import getMaximumStake from '../stake_info/getMaximumStake';

const postCheck = async (): Promise<boolean> => {
  const maxUnloaded = await awaiter(() => getMaximumStake() === 0);
  if (!maxUnloaded) {
    log('Максимум не исчез после очистки купона', 'crimson');
    return false;
  }
  return true;
};

const clearCoupon = clearCouponGenerator({
  clearAllSelector: '.del-all',
  // clearSingleSelector: '',
  getStakeCount,
  postCheck,
});

export default clearCoupon;
