import { log, fireEvent } from '@kot-shrodingera-team/germes-utils';

const setBetAcceptMode = (): boolean => {
  const betAcceptModeSelect = document.querySelector(
    '#allE'
  ) as HTMLSelectElement;
  if (!betAcceptModeSelect) {
    log(
      'Ошибка установки режима принятия ставки: не найдена кнопка переключения режима',
      'crimson'
    );
  }
  switch (worker.StakeAcceptRuleShoulder) {
    case 0:
      betAcceptModeSelect.value = '0';
      break;
    case 1:
      betAcceptModeSelect.value = '2';
      break;
    case 2:
      betAcceptModeSelect.value = '1';
      break;
    default:
  }
  fireEvent(betAcceptModeSelect, 'change');
  return true;
};

export default setBetAcceptMode;
