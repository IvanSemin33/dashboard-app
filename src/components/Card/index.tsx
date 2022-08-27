import { useStyles } from "./styles";
import { ReactComponent as Info } from "../../assets/images/info.svg";
import Percent from "../Percent";

interface Props {
  title: string;
  startValue: number;
  endValue: number;
  percent: number;
}

const Card = ({ title, startValue, endValue, percent }: Props) => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <Info className={styles.info} />
      <div className={styles.middleContainer}>
        <div className={styles.endValue}>{endValue}</div>
        <div className={styles.percent}>
          <Percent value={percent} />
        </div>
      </div>
      <div className={styles.startValue}>{startValue}</div>
    </div>
  );
};

export default Card;
