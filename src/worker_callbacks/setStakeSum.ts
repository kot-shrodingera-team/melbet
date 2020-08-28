import setStakeSumGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/setStakeSum';

const setStakeSum = setStakeSumGenerator({
  sumInputSelector: 'input#bet_input',
});

export default setStakeSum;
