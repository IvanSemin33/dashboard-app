import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";

import { useStyles } from "./styles";

interface Props {
  value: number;
}

const Percent = ({ value }: Props) => {
  const styles = useStyles();

  const getPercent = () => {
    if (value > 0) {
      return (
        <div className={styles.percentContainer}>
          <ArrowUp />
          <span className={styles.percentUp}>{value}%</span>
        </div>
      );
    }
    if (value < 0) {
      return (
        <div className={styles.percentContainer}>
          <ArrowDown />
          <span className={styles.percentDown}>{Math.abs(value)}%</span>
        </div>
      );
    }
    return <>{value}</>;
  };

  return getPercent();
};

export default Percent;
