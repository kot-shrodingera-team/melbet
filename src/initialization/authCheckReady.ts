import { authCheckReadyGenerator } from '@kot-shrodingera-team/germes-generators/initialization';

const authCheckReady = authCheckReadyGenerator({
  authFormSelector: 'a.submit',
  accountSelector: '.acc-open',
});

export default authCheckReady;
