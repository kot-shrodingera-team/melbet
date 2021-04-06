import getCurrentSumGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getCurrentSum';

const getCurrentSum = getCurrentSumGenerator({
  sumInputSelector: 'input#bet_input',
});

export default getCurrentSum;
