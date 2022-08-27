import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "502px",
    height: "304px",
    background: "#FFFFFF",
    border: "0.5px solid #E9E9FF",
    borderRadius: "8px",
    paddingTop: "44px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "24px",
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
  chart: {
    "& .domainAndTicks": {
      // "& ~.domainAndTicks": {
      color: "#8C8C8C",
      "& .tick": {
        "& .tickLabel": {
          fontWeight: 400,
          fontSize: "16px !important",
          lineHeight: "30px",
          color: "#8C8C8C",
        },
        // },
      },
    },
  },
  // text: {
  //   color: "#8C8C8C",
  // },
});
