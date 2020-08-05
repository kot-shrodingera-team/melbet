import { setStakeSumGenerator } from '@kot-shrodingera-team/germes-generators/worker_callbacks';

const setStakeSum = setStakeSumGenerator({
  sumInputSelector: 'input#bet_input',
});

export default setStakeSum;
