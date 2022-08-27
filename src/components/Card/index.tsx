import { useStyles } from "./styles";
import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";

interface Props {
  title: string;
  startValue: number;
  endValue: number;
  percent: number;
}

const Card = ({ title, startValue, endValue, percent }: Props) => {
  const styles = useStyles();

  const getPercent = () => {
    if (percent > 0) {
      return (
        <div className={styles.percentContainer}>
          <ArrowUp />
          <span className={styles.percentUp}>{percent}%</span>
        </div>
      );
    }
    if (percent < 0) {
      return (
        <div className={styles.percentContainer}>
          <ArrowDown />
          <span className={styles.percentDown}>{Math.abs(percent)}%</span>
        </div>
      );
    }
    return percent;
  };

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <Info className={styles.info} />
      <div className={styles.middleContainer}>
        <div className={styles.endValue}>{endValue}</div>
        <div className={styles.percent}>{getPercent()}</div>
      </div>
      <div className={styles.startValue}>{startValue}</div>
    </div>
  );
};

export default Card;
