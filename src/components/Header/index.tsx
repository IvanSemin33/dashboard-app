import { Header as ANTHeader } from "antd/lib/layout/layout";
import { useStyles } from "./styles";

const Header = () => {
  const styles = useStyles();

  return (
    <ANTHeader className={styles.header} color="red">
      Header
    </ANTHeader>
  );
};

export default Header;
