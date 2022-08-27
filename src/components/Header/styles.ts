import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  header: {
    backgroundColor: "#EFEFFF",
    paddingLeft: "24px",
    paddingRight: "24px",
    display: "flex",
    gap: "11px",
    alignItems: "center",
    height: "60px",
  },
  title: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "22px",
  },
  currency: {
    width: "73px",
    "& .ant-select-selector": {
      border: "0.5px solid #E9E9FF !important",
      borderRadius: "8px !important",
    },
  },
});
