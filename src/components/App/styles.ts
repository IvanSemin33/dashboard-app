import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  sider: {
    width: "208px",
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#fff",
  },
  rightContainer: {
    paddingLeft: "208px",
    height: "fit-content",
    minHeight: "100vh",
  },
});
