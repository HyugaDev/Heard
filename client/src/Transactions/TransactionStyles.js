import { createStyles, makeStyles } from "@mui/styles";

export const transactionStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      textAlign: "center",
      padding: "10px",
    },
    transactionList: {
      width: "70% !important",
      margin: "0 auto",
    },
    editButton: {
      marginRight: "8px !important"
    },
    removeButton: {
      backgroundColor: "#d84444 !important",
    },
    addButton: {
      float: "right",
      backgroundColor: "#d3d3d3 !important",
      color: "black !important",
      fontWeight: "700 !important",
    }
  })
);
