import { Select } from "antd";
import { Header as ANTHeader } from "antd/lib/layout/layout";

import { useStyles } from "./styles";

const { Option } = Select;

const Header = () => {
  const styles = useStyles();

  const onChange = (value: string) => {};

  return (
    <ANTHeader className={styles.header} color="red">
      <div className={styles.title}>Currency</div>
      <Select defaultValue="USD" style={{ width: 73 }} onChange={onChange}>
        <Option value="usd">USD</Option>
        <Option value="eur">EUR</Option>
      </Select>
    </ANTHeader>
  );
};

export default Header;
