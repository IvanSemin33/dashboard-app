import { getRandomValue } from "../utils/random";

const elements = ["Water", "Fire", "Wind", "Forest"];

export const getElements = () => {
  return elements.map((element) => {
    const startValue = getRandomValue(0, 10000);
    const endValue = getRandomValue(0, 10000);
    const percent = +(((endValue - startValue) / startValue) * 100).toFixed(2);

    return {
      title: element,
      startValue,
      endValue,
      percent,
    };
  });
};
