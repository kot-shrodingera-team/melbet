import { authorizeGenerator } from '@kot-shrodingera-team/germes-generators/initialization';
import { updateBalance } from '../stake_info/getBalance';

const authorize = authorizeGenerator({
  openForm: {
    selector: 'a.submit',
    openedSelector: '.loginDropTop .head-dropdown.active',
    afterOpenDelay: 1000,
  },
  loginInputSelector: 'input#userLogin',
  passwordInputSelector: 'input#userPassword',
  submitButtonSelector: 'a.enter',
  loginedWait: {
    loginedSelector: '.acc-open',
    updateBalance,
  },
});

export default authorize;
