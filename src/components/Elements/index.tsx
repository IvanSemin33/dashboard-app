import { isArray } from "lodash";
import { Moment } from "moment";
import { useEffect, useState } from "react";
import { ElementData, getElement, getElements } from "../../api/elements";
import Card from "../Card";
import { useStyles } from "./styles";

interface Props {
  variant: "single" | "all";
  startDate: Moment;
  endDate: Moment;
}

const Elements = ({ variant, startDate, endDate }: Props) => {
  const styles = useStyles();
  const [data, setData] = useState<ElementData[] | ElementData>();

  useEffect(() => {
    setData(variant === "all" ? getElements() : getElement());
  }, [startDate, endDate, variant]);

  return data ? (
    <div
      className={styles.container}
      style={{ height: variant === "all" ? "304px" : "142px" }}
    >
      {isArray(data) ? (
        data.map((element) => (
          <Card
            title={element.title}
            startValue={element.startValue}
            endValue={element.endValue}
            percent={element.percent}
          />
        ))
      ) : (
        <Card
          title={data.title}
          startValue={data.startValue}
          endValue={data.endValue}
          percent={data.percent}
        />
      )}
    </div>
  ) : null;
};

export default Elements;
