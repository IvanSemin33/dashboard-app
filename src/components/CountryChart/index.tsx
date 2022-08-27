import { Moment } from "moment";
import { useEffect, useMemo, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import { ContryCartData, getCountyChartData } from "../../api/countyChart";
import { useStyles } from "./styles";

interface Props {
  startDate: Moment;
  endDate: Moment;
}

const CountryChart = ({ endDate, startDate }: Props) => {
  const styles = useStyles();

  const [data, setData] = useState<ContryCartData[]>();

  useEffect(() => {
    setData(getCountyChartData());
  }, [startDate, endDate]);

  const primaryAxis = useMemo<
    AxisOptions<ContryCartData[][number]["data"][number]>
  >(
    () => ({
      position: "left",
      getValue: (datum: ContryCartData["data"][0]) => datum.primary,
      showGrid: false,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<ContryCartData[][number]["data"][number]>[]
  >(
    () => [
      {
        position: "bottom",
        getValue: (datum: ContryCartData["data"][0]) => datum.secondary,
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

  return data ? (
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
  ) : null;
};

export default CountryChart;
