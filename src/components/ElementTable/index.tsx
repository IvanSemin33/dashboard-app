import { useEffect, useMemo, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Moment } from "moment";
import { Table } from "antd";

import { ElementTableData, getElementTableData } from "../../api/elements";
import Percent from "../Percent";
import { useAppSelector } from "../../store/hooks";
import { getCurrencySymbol } from "../../utils/currency";

import { useStyles } from "./styles";

interface Props {
  startDate: Moment;
  endDate: Moment;
}

const ElementTable = ({ startDate, endDate }: Props) => {
  const styles = useStyles();

  const currency = useAppSelector((state) => state.currency.value);

  const [data, setData] = useState<ElementTableData[]>([]);

  useEffect(() => {
    setData(getElementTableData());
  }, [startDate, endDate]);

  const columns: ColumnsType<ElementTableData> = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Value ",
        dataIndex: "value",
        key: "value",
        render: (_, { value }) => (
          <>{`${value} ${getCurrencySymbol(currency)}`}</>
        ),
      },
      {
        title: "Prev value",
        dataIndex: "prevValue",
        key: "prevValue",
        render: (_, { prevValue }) => (
          <>{`${prevValue} ${getCurrencySymbol(currency)}`}</>
        ),
      },
      {
        title: "",
        key: "percent",
        dataIndex: "percent",
        render: (_, { percent }) => (
          <div className={styles.percent}>
            <Percent value={percent} />
          </div>
        ),
      },
    ],
    [styles, currency]
  );

  return data.length > 0 ? (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ defaultPageSize: 5 }}
      className={styles.table}
    />
  ) : null;
};

export default ElementTable;
