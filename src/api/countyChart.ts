import { getRandomValue } from "../utils/random";

export type ContryCartData = {
  label: string;
  data: {
    primary: string;
    secondary: number;
  }[];
};
const countries = ["Russia", "Spain", "USA", "Italy"];

export const getCountyChartData = (): ContryCartData[] => {
  return countries
    .map((country) => ({
      label: country,
      data: [
        {
          primary: country,
          secondary: getRandomValue(0, 10000),
        },
      ],
    }))
    .sort((a, b) => a.data[0].secondary - b.data[0].secondary);
};
