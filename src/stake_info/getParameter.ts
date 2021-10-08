import {
  log,
  ri,
  parameterRegex,
  correctScoreParameter,
} from '@kot-shrodingera-team/germes-utils';

const getParameter = (): number => {
  const marketElement = document.querySelector(
    '.cuponBetblock-item:last-child .team.fl'
  );
  if (!marketElement) {
    log('Ошибка определения параметра: не найдена роспись ставки', 'crimson');
    return -9999;
  }
  const market = marketElement.textContent.trim();

  const singleParameterRegexArray = [
    ri`^Тотал [МБ] (${parameterRegex})$`,
    ri`^Тотал (${parameterRegex}) [МБ]$`,
    ri`^Тотал \((${parameterRegex})\) [МБ]$`,
    ri`^Тотал (${parameterRegex}) (?:меньше|больше|равно) \(3way\)$`,
    ri`^Ф[12] (${parameterRegex})$`,
    ri`^Ф[12] \((${parameterRegex})\)$`,
    ri`^Индивидуальный тотал [12] (?:Меньше|Больше) \((${parameterRegex})\)$`,
    ri`^Индивидуальный тотал [12]-го \((${parameterRegex})\) [МБ]$`,
    ri`^Индивидуальный тотал [12] \(3way\) (?:Меньше|Больше|Равно) (\d+)$`,
    ri`^Игрок[12], индивидуальный тотал выстрелов \((${parameterRegex})\) [МБ]$`,
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const regex of singleParameterRegexArray) {
    const match = market.match(regex);
    if (match) {
      return Number(match[1]);
    }
  }

  const parameter3wayLessRegexArray = [
    ri`^Тотал (\d+) меньше (3way)$`,
    ri`^Индивидуальный тотал [12] (3way) Меньше (\d+)$`,
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const regex of parameter3wayLessRegexArray) {
    const match = market.match(regex);
    if (match) {
      return Number(match[1]) - 0.5;
    }
  }

  const parameter3wayMoreRegexArray = [
    ri`^Тотал (\d+) больше (3way)$`,
    ri`^Индивидуальный тотал [12] (3way) Больше (\d+)$`,
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const regex of parameter3wayMoreRegexArray) {
    const match = market.match(regex);
    if (match) {
      return Number(match[1]) + 0.5;
    }
  }

  const euHandicapParameterRegex = ri`Европейский гандикап (\d+):(\d+) П(1|2)`;
  const euHandicapParameterMatch = market.match(euHandicapParameterRegex);
  if (euHandicapParameterMatch) {
    const scoreParameter =
      Number(euHandicapParameterMatch[1]) - Number(euHandicapParameterMatch[2]);
    if (euHandicapParameterMatch[3] === '1') {
      return scoreParameter;
    }
    return -scoreParameter;
  }

  const correctScoreRegex = ri`Точный счет (${parameterRegex})-(${parameterRegex})`;
  const correctScoreMatch = market.match(correctScoreRegex);
  if (correctScoreMatch) {
    return correctScoreParameter(
      Number(correctScoreMatch[1]),
      Number(correctScoreMatch[2])
    );
  }

  return -6666;
};

export default getParameter;
