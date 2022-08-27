import { DatePicker } from "antd";
import { Content } from "antd/lib/layout/layout";
import { ComponentProps, useState } from "react";
import CountryChart from "../../components/CountryChart";
import Elements from "../../components/Elements";
import LinearChart from "../../components/LinearChart";

import { useStyles } from "./styles";

const { RangePicker } = DatePicker;

export type Dates = ComponentProps<typeof RangePicker>["value"];

const StatisticsPage = () => {
  const styles = useStyles();

  const [dates, setDates] = useState<Dates>();

  return (
    <Content className={styles.content}>
      <div className={styles.title}>Statistics</div>

      <RangePicker
        value={dates}
        onCalendarChange={setDates}
        className={styles.dateRager}
        showTime={{ format: "HH:mm" }}
        format="DD.MM.YYYY HH:MM"
      />
      {dates && dates[0] && dates[1] && (
        <>
          <div className={styles.firstSection}>
            <Elements />
            <CountryChart />
          </div>
          <LinearChart startDate={dates[0]} endDate={dates[1]} />
        </>
      )}
    </Content>
  );
};

export default StatisticsPage;
