import { Moment } from "moment";
import { useEffect, useMemo, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import { ContryCartData, getCountyChartData } from "../../api/countyChart";
import { useAppSelector } from "../../store/hooks";
import { getCurrencySymbol } from "../../utils/currency";
import { useStyles } from "./styles";

interface Props {
  startDate: Moment;
  endDate: Moment;
}

const CountryChart = ({ endDate, startDate }: Props) => {
  const styles = useStyles();

  const currency = useAppSelector((state) => state.currency.value);

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
        formatters: {
          scale: (value: number) => `${value} ${getCurrencySymbol(currency)}`,
          tooltip: (value: number) => `${value} ${getCurrencySymbol(currency)}`,
        },
      },
    ],
    [currency]
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
