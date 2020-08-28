import { log } from '@kot-shrodingera-team/germes-utils';
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

  // worker.Helper.LoadUrl(worker.EventUrl.replace(/_/g, '-'));
  worker.Helper.LoadUrl(url);
};

export default fastLoad;
