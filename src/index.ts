import '@kot-shrodingera-team/worker-declaration/workerCheck';
import { log } from '@kot-shrodingera-team/germes-utils';
import getStakeInfo from './worker_callbacks/getStakeInfo';
import setStakeSum from './worker_callbacks/setStakeSum';
import doStake from './worker_callbacks/doStake';
import checkCouponLoading from './worker_callbacks/checkCouponLoading';
import checkStakeStatus from './worker_callbacks/checkStakeStatus';
import initialize from './initialization';
import afterSuccesfulStake from './worker_callbacks/afterSuccesfulStake';
import fastLoad from './fastLoad';
import { version } from '../package.json';
import { initialShowStake } from './show_stake';

(async (): Promise<void> => {
  log(`Загрузка страницы (${version})`, 'steelblue');
  if (!worker.IsShowStake) {
    initialize();
  } else {
    initialShowStake();
  }
})();

worker.SetCallBacks(
  log,
  getStakeInfo,
  setStakeSum,
  doStake,
  checkCouponLoading,
  checkStakeStatus,
  afterSuccesfulStake
);

worker.SetFastCallback(fastLoad);
