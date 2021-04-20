import { log } from '@kot-shrodingera-team/germes-utils';
import showStake from './show_stake';
// import clearCoupon from './show_stake/clearCoupon';

const fastLoad = async (): Promise<void> => {
  log(`Быстрая загрузка`, 'steelblue');
  // worker.Helper.LoadUrl(worker.EventUrl.replace(/_/g, '-'));
  // const couponCleared = await clearCoupon();
  // if (!couponCleared) {
  //   worker.JSFail();
  //   return;
  // }
  const [gameId] = worker.BetId.split('|');
  const url = worker.EventUrl.replace(worker.EventId, gameId);
  if (window.location.href === url) {
    log('Уже открыто нужное событие', 'steelblue');
    showStake();
    return;
  }
  log(`${window.location.href} !== ${worker.EventUrl}`, 'white', true);
  log('Переходим на событие', 'orange');
  window.location.href = url;
};

export default fastLoad;
