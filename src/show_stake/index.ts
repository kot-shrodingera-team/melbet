import {
  getElement,
  log,
  sleep,
  awaiter,
  domFullLoaded,
} from '@kot-shrodingera-team/germes-utils';
import clearCoupon from './clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
import { updateBalance } from '../stake_info/getBalance';
import setBetAcceptMode from './setBetAcceptMode';
import getMaximumStake from '../stake_info/getMaximumStake';

let couponOpenning = false;

export const isCouponOpenning = (): boolean => couponOpenning;

const jsFail = (message = ''): void => {
  if (message) {
    log(message, 'red');
  }
  couponOpenning = false;
  worker.JSFail();
};

const showStake = async (): Promise<void> => {
  couponOpenning = true;
  log(
    `Открываем ставку:\n${worker.TeamOne} vs ${worker.TeamTwo}\n${worker.BetName}`,
    'steelblue'
  );
  const couponLoaded = document.querySelector('#cupon_block');
  if (!couponLoaded) {
    jsFail('Купон не найден');
    return;
  }
  const [gameId, eventId, param] = worker.BetId.split('|');
  const realParam = param === 'null' ? '0' : param;
  // const alternativeEventId = `${eventId.slice(0, 9)}0${eventId.slice(9)}`;
  // const betSelector =
  //   `[data-gameid="${gameId}"][data-eventid="${eventId}"][data-param="${realParam}"]` +
  //   `, [data-gameid="${gameId}"][data-eventid="${alternativeEventId}"][data-param="${realParam}"]`;
  const betSelector = `[data-gameid="${gameId}"][data-eventid="${eventId}"][data-param="${realParam}"]`;
  log(`betSelector = '${betSelector}'`, 'white', true);
  const betButton = (await getElement(betSelector)) as HTMLElement;
  if (!betButton) {
    jsFail('Ставка не найдена');
    return;
  }
  if (betButton.getAttribute('data-block') === 'true') {
    jsFail('Ставка заблокирована');
    return;
  }
  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    jsFail('Не удалось очистить купон');
    return;
  }
  updateBalance();
  await sleep(100);
  betButton.click();
  const betAdded = await awaiter(() => getStakeCount() === 1);
  if (!betAdded) {
    jsFail('Ставка не попала в купон');
    return;
  }
  const maxLoaded = await awaiter(() => getMaximumStake() !== 0);
  if (!maxLoaded) {
    jsFail('Максимум не появился');
    return;
  }
  log('Ставка успешно открыта', 'green');
  setBetAcceptMode();
  couponOpenning = false;
  worker.JSStop();
};

export const initialShowStake = async (): Promise<void> => {
  await domFullLoaded();
  showStake();
};

export default showStake;
