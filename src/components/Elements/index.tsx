import { getElements } from "../../api/elements";
import Card from "../Card";
import { useStyles } from "./styles";

const Elements = () => {
  const styles = useStyles();

  const data = getElements();

  return (
    <div className={styles.container}>
      {data.map((element) => (
        <Card
          title={element.title}
          startValue={element.startValue}
          endValue={element.endValue}
          percent={element.percent}
        />
      ))}
    </div>
  );
};

export default Elements;
