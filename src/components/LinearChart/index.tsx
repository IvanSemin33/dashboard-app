import { isEqual } from "lodash";
import moment, { Moment } from "moment";
import { useEffect, useMemo, useState } from "react";
import { Chart } from "react-charts";
import { getLinearChartData, LinearChartData } from "../../api/linearChart";

import { useStyles } from "./styles";

interface Props {
  startDate: Moment;
  endDate: Moment;
}

const LinearChart = ({ startDate, endDate }: Props) => {
  const styles = useStyles();

  const [data, setData] = useState<LinearChartData>();

  const [lines, setLines] = useState<
    {
      label: string;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    setData(getLinearChartData(startDate, endDate));
  }, [startDate, endDate]);

  const isDifferenceMoreThanOneDay = useMemo(() => {
    const difference = endDate.diff(startDate, "days");
    return difference > 1;
  }, [endDate, startDate]);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum: any) => datum.primary,
      showGrid: false,
      formatters: {
        scale: (date: Date) => {
          const momentDate = moment(date);
          if (isDifferenceMoreThanOneDay) {
            return momentDate.format("DD MMM");
          }
          return momentDate.format("HH:mm");
        },
      },
    }),
    [isDifferenceMoreThanOneDay]
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum: any) => datum.secondary,
      },
    ],
    []
  );

  return data ? (
    <div className={styles.container}>
      <div className={styles.title}>
        {lines.map((line) => (
          <div className={styles.titleItem}>
            <div
              className={styles.line}
              style={{ backgroundColor: line.color }}
            />
            <div>{line.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.wrapper}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            tooltip: false,
            getSeriesStyle: (datum) => {
              const newLine = {
                label: datum.label,
                color: datum.style?.fill || "",
              };
              if (
                !lines[datum.index] ||
                !isEqual(lines[datum.index], newLine)
              ) {
                const newLines = [...lines];
                newLines.splice(datum.index, 1, newLine);
                setLines(newLines);
              }

              return { ...datum.style };
            },
          }}
        />
      </div>
    </div>
  ) : null;
};

export default LinearChart;
