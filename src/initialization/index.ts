import initializeGenerator from '@kot-shrodingera-team/germes-generators/initialization/initialize';
import checkAuth, { authCheckReady } from '../stake_info/checkAuth';
import { balanceReady, updateBalance } from '../stake_info/getBalance';
import authorize from './authorize';

const initialize = initializeGenerator({
  authCheckReady,
  checkAuth,
  balanceReady,
  updateBalance,
  authorize,
});

export default initialize;
