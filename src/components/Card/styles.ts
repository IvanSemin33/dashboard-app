import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  card: {
    position: "relative",
    width: "241px",
    height: "142px",
    background: "#FFFFFF",
    border: "0.5px solid #E1E1E1",
    borderRadius: "8px",
    paddingTop: "21px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
  },
  title: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    marginBottom: "12px",
  },
  middleContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingBottom: "8px",
    borderBottom: "1px dashed #E1E1E1",
    marginBottom: "4px",
  },
  endValue: {
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "38px",
  },
  percent: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
  },
  startValue: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "22px",
    color: "#8C8C8C",
  },
  info: {
    position: "absolute",
    top: "25px",
    right: "25px",
    width: "14px",
    height: "14px",
  },
});
