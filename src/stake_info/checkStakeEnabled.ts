import checkStakeEnabledGenerator from '@kot-shrodingera-team/germes-generators/stake_info/checkStakeEnabled';
import getStakeCount from './getStakeCount';

const checkStakeEnabled = checkStakeEnabledGenerator({
  getStakeCount,
  betCheck: {
    selector: '.cuponBetList li .cuponBetblock',
    errorClasses: [
      {
        className: 'locked',
        message: 'ставка заблокирована',
      },
    ],
  },
});

export default checkStakeEnabled;
