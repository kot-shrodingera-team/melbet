import {
  getElement,
  log,
  sleep,
  awaiter,
} from '@kot-shrodingera-team/germes-utils';
import clearCoupon from './clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
import { updateBalance } from '../stake_info/getBalance';
import setBetAcceptMode from './setBetAcceptMode';
import getMaximumStake from '../stake_info/getMaximumStake';

const showStake = async (): Promise<void> => {
  const couponLoaded = await getElement('#cupon_block');
  if (!couponLoaded) {
    log('Купон не загрузился', 'crimson');
    worker.JSFail();
    return;
  }
  const [gameId, eventId, param] = worker.BetId.split('|');
  const realParam = param === 'null' ? '0' : param;
  // const alternativeEventId = `${eventId.slice(0, 9)}0${eventId.slice(9)}`;
  // const betSelector =
  //   `[data-gameid="${gameId}"][data-eventid="${eventId}"][data-param="${realParam}"]` +
  //   `, [data-gameid="${gameId}"][data-eventid="${alternativeEventId}"][data-param="${realParam}"]`;
  const betSelector = `[data-gameid="${gameId}"][data-eventid="${eventId}"][data-param="${realParam}"]`;
  const betButton = (await getElement(betSelector)) as HTMLElement;
  if (!betButton) {
    log('Ставка не найдена', 'red');
    worker.JSFail();
    return;
  }
  if (betButton.getAttribute('data-block') === 'true') {
    log('Ставка заблокирована', 'red');
    worker.JSFail();
    return;
  }
  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    log('Не удалось очистить купон', 'red');
    worker.JSFail();
    return;
  }
  updateBalance();
  await sleep(100);
  betButton.click();
  const betAdded = await awaiter(() => getStakeCount() === 1);
  if (!betAdded) {
    log('Ставка не попала в купон', 'red');
    worker.JSFail();
    return;
  }
  const maxLoaded = await awaiter(() => getMaximumStake() !== 0);
  if (!maxLoaded) {
    log('Максимум не появился', 'red');
    worker.JSFail();
    return;
  }
  log('Ставка успешно открыта', 'green');
  setBetAcceptMode();
  worker.JSStop();
};

export default showStake;
