import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getBalance';

export const balanceReady = worker.IsRu
  ? balanceReadyGenerator({
      balanceSelector: '.top-b__account > p',
      // balanceRegex: /^Баланс: (\d+(?:\.\d+)?) RUB$/i,
    })
  : balanceReadyGenerator({
      balanceSelector: '.top-b-acc__amount',
    });

export const germesGetBalance = worker.IsRu
  ? getBalanceGenerator({
      balanceSelector: '.top-b__account > p',
      // balanceRegex: /^Баланс: (\d+(?:\.\d+)?) RUB$/i,
    })
  : getBalanceGenerator({
      balanceSelector: '.top-b-acc__amount',
    });

export const updateBalance = (): void => {
  worker.JSBalanceChange(germesGetBalance());
};

export default germesGetBalance;
