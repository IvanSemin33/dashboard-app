import { useStyles } from "./styles";
import { ReactComponent as Info } from "../../assets/images/info.svg";
import Percent from "../Percent";
import { useAppSelector } from "../../store/hooks";
import { getCurrencySymbol } from "../../utils/currency";

interface Props {
  title: string;
  startValue: number;
  endValue: number;
  percent: number;
}

const Card = ({ title, startValue, endValue, percent }: Props) => {
  const styles = useStyles();

  const currency = useAppSelector((state) => state.currency.value);

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <Info className={styles.info} />
      <div className={styles.middleContainer}>
        <div className={styles.endValue}>{`${endValue} ${getCurrencySymbol(
          currency
        )}`}</div>
        <div className={styles.percent}>
          <Percent value={percent} />
        </div>
      </div>
      <div className={styles.startValue}>{`${startValue} ${getCurrencySymbol(
        currency
      )}`}</div>
    </div>
  );
};

export default Card;
