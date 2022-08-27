import { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import { getCountyChartData } from "../../api/countyChart";
import { useStyles } from "./styles";

const CountryChart = () => {
  const styles = useStyles();

  const data = getCountyChartData();

  const primaryAxis = useMemo<AxisOptions<typeof data[number]["data"][number]>>(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
      showGrid: false,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
        showGrid: false,
      },
    ],
    []
  );

  const getSeriesStyle = () => {
    return {
      height: "30px",
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            tooltip: false,
            getSeriesStyle,
            primaryCursor: {
              showLine: false,
            },
          }}
          className={styles.chart}
        />
      </div>
    </div>
  );
};

export default CountryChart;
