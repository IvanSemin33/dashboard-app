import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "1024px",
    height: "434px",
    background: "#FFFFFF",
    border: "0.5px solid #E9E9FF",
    borderRadius: "8px",
    paddingTop: "44px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "35px",
  },
  title: {
    display: "flex",
    width: "100%",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },
  titleItem: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "22px",
  },
  line: {
    width: "20px",
    height: "2px",
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
});
