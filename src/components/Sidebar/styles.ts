import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  sidebar: {
    width: "208px",
    marginTop: "30px",
  },
  menuItem: {
    color: "#000000",
    "&:hover": {
      color: "#8F00FF !important",
    },
  },
  menuItemActive: {
    color: "#000000",
    backgroundColor: "#ECECFF !important",

    "&:hover": {
      color: "#8F00FF !important",
    },

    "&:after": {
      borderRight: {
        color: "#8F00FF !important",
        width: "2px !important",
      },
    },
  },
});
