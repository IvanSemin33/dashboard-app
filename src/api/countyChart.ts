import { getRandomValue } from "../utils/random";

const countries = ["Russia", "Spain", "USA", "Italy"];

export const getCountyChartData = () => {
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
