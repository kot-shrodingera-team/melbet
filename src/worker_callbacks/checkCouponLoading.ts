import { log } from '@kot-shrodingera-team/germes-utils';
import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import { getDoStakeTime } from '../stake_info/doStakeTime';

const check = () => {
  const dialog = document.querySelector('.ui-dialog') as HTMLElement;
  if (dialog && dialog.style.display === 'block') {
    log('Обработка ставки завершена (всплывающее окно)', 'orange');
    return false;
  }
  const loaderIcon = document.querySelector('#goPutBetLoad') as HTMLElement;
  if (loaderIcon && loaderIcon.style.display === 'block') {
    log('Обработка ставки (есть иконка обработки)', 'tan');
  } else {
    log('Обработка ставки (нет иконки обработки)', 'tan');
  }
  return true;
};

const checkCouponLoading = checkCouponLoadingGenerator({
  bookmakerName: 'Melbet',
  getDoStakeTime,
  check,
});

export default checkCouponLoading;
