import doStakeGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/doStake';
import getCoefficient from '../stake_info/getCoefficient';
import { clearDoStakeTime } from '../stake_info/doStakeTime';

const doStake = doStakeGenerator({
  doStakeButtonSelector: '#goPutBetButton',
  getCoefficient,
  clearDoStakeTime,
});

export default doStake;
