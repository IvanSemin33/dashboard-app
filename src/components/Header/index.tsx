import { Select } from "antd";
import { Header as ANTHeader } from "antd/lib/layout/layout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Currency, setCurrency } from "../../store/slices/currency";

import { useStyles } from "./styles";

const { Option } = Select;

const Header = () => {
  const styles = useStyles();

  const currency = useAppSelector((state) => state.currency.value);
  const dispatch = useAppDispatch();

  const onChange = (value: Currency) => {
    dispatch(setCurrency(value));
  };

  return (
    <ANTHeader className={styles.header} color="red">
      <div className={styles.title}>Currency</div>
      <Select value={currency} style={{ width: 73 }} onChange={onChange}>
        <Option value="usd">USD</Option>
        <Option value="eur">EUR</Option>
      </Select>
    </ANTHeader>
  );
};

export default Header;
