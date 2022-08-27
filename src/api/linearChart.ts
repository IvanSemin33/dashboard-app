import { Moment } from "moment";
import { getRandomValue } from "../utils/random";

const lines = ["line A", "line B", "line C"];

export type LinearChartData = {
  label: string;
  data: {
    primary: Date;
    secondary: number;
  }[];
}[];

export const getLinearChartData = (
  startDate: Moment,
  endDate: Moment
): LinearChartData => {
  const start = new Date(startDate.toDate());
  const end = new Date(endDate.toDate());

  const getDate = (index: number) => {
    if (index === 0) {
      return start;
    } else if (index === 9) {
      return end;
    }
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  return lines.map((line) => ({
    label: line,
    data: Array(10)
      .fill(1)
      .map((_, i) => ({
        primary: getDate(i),
        secondary: getRandomValue(0, 10000),
      }))
      .sort((a, b) => b.primary.getTime() - a.primary.getTime()),
  }));
};
