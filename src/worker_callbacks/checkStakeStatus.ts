import { log } from '@kot-shrodingera-team/germes-utils';
import { updateBalance } from '../stake_info/getBalance';

const checkStakeStatus = (): boolean => {
  const lockedBet = document.querySelector(
    '.cuponBetList li .cuponBetblock.locked'
  );
  if (lockedBet) {
    log('Ставка не принята (заблокирована)', 'orange');
    return false;
  }
  const dialog = document.querySelector('.ui-dialog') as HTMLElement;
  if (!dialog) {
    log(
      'Ошибка определения результата ставки: не найдено всплывающее окно с результатом',
      'crimson'
    );
    return false;
  }
  if (dialog.style.display !== 'block') {
    log(
      'Ошибка определения результата ставки: всплывающее окно с результатом не видно',
      'crimson'
    );
    return false;
  }
  const resultCoupon = document.querySelector('.p-coupon');
  if (resultCoupon) {
    log('Ставка принята', 'green');
    updateBalance();
    return true;
  }
  const alertMessageElement = document.querySelector('#alert_dialog span');
  if (!alertMessageElement) {
    log(
      'Ошибка определения результата ставки: не найден заголовок всплывающего окна',
      'crimson'
    );
    return false;
  }
  const alertMessage = alertMessageElement.textContent.trim();
  log(`Ставка не принята (Текст сообщения: "${alertMessage}")`, 'tomato');
  const dialogButtons = [
    ...document.querySelectorAll('.ui-dialog-buttonset button'),
  ];
  const okButton = dialogButtons.find(
    (button) =>
      button.textContent.trim() === 'ОК' || button.textContent.trim() === 'OK'
  ) as HTMLElement;
  const cancelButton = dialogButtons.find(
    (button) => button.textContent.trim() === 'Отмена'
  ) as HTMLElement;
  if (/^Изменился коэффициент/i.test(alertMessage)) {
    log(`Отменяем ставку с изменённым коэффициентом`, 'orange');
    if (!cancelButton) {
      log(
        'Не найдена кнопка отмены ставки с изменённым коэффициентом',
        'crimson'
      );
    } else {
      cancelButton.click();
    }
    return false;
  }
  if (!okButton) {
    log('Не найдена кнопка ОК во всплывающем окне', 'crimson');
  } else {
    okButton.click();
  }
  return false;
};

export default checkStakeStatus;
