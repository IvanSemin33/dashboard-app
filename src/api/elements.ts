import { getRandomValue } from "../utils/random";

export type ElementData = {
  title: string;
  startValue: number;
  endValue: number;
  percent: number;
};

export type ElementTableData = {
  key: number;
  name: string;
  value: number;
  prevValue: number;
  percent: number;
};

const elements = ["Water", "Fire", "Wind", "Forest"];

export const getElements = (): ElementData[] => {
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

export const getElement = (): ElementData => {
  const startValue = getRandomValue(0, 10000);
  const endValue = getRandomValue(0, 10000);
  const percent = +(((endValue - startValue) / startValue) * 100).toFixed(2);

  return {
    title: elements[0],
    startValue,
    endValue,
    percent,
  };
};

export const getElementTableData = (): ElementTableData[] => {
  return Array(15)
    .fill(null)
    .map((_, i) => {
      const value = getRandomValue(0, 10000);
      const prevValue = getRandomValue(0, 10000);
      const percent = +(((value - prevValue) / prevValue) * 100).toFixed(2);

      return {
        key: i,
        name: `Row ${i + 1}`,
        value,
        prevValue,
        percent,
      };
    });
};
