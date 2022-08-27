import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  content: {
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: "#f9f7ff",
    height: "100%",
  },
  title: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "28px",
    color: "#000000",
    marginBottom: "28px",
  },
  dateRager: {
    marginBottom: "16px",
    width: "300px",
    height: "40px",
    background: "#FFFFFF",
    border: "0.5px solid #E9E9FF",
    borderRadius: " 8px",
  },
  firstSection: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  animation: {
    animationName: "animate",
    animationDuration: "1s",
  },
});
