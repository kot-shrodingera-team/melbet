import checkAuthGenerator, {
  authStateReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/checkAuth';

export const authStateReady = authStateReadyGenerator({
  noAuthElementSelector: 'a.submit',
  authElementSelector: '.acc-open',
});

const checkAuth = checkAuthGenerator({
  authElementSelector: '.acc-open',
});

export default checkAuth;
