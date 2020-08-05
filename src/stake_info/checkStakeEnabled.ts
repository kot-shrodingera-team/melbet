import { checkStakeEnabledGenerator } from '@kot-shrodingera-team/germes-generators/stake_info';

const checkStakeEnabled = checkStakeEnabledGenerator({
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
