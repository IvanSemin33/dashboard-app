import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  percent: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
  },
  table: {
    "& .ant-table-thead": {
      "& .ant-table-cell": {
        backgroundColor: "#ECECFF",
      },
    },
  },
});
