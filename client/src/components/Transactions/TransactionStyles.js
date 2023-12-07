import { createStyles, makeStyles } from "@mui/styles";

export const transactionStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      textAlign: "center",
      padding: "10px",
    },
    transactionList: {
      width: "80% !important",
      margin: "0 auto",
    },
    editButton: {
      marginRight: "8px !important"
    },
    removeButton: {
      backgroundColor: "#d84444 !important",
    },
    greyButton: {
      float: "right",
      backgroundColor: "#d3d3d3 !important",
      color: "black !important",
      fontWeight: "700 !important",
    },
    closeButton: {
      cursor: 'pointer', 
      background: 'none', 
      border: 'none', 
      fontSize: 24, 
      color: 'gray' 
    },
    buttons: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
    },
    crossButton: {
      display: 'flex', 
      justifyContent: 'flex-end', 
      marginBottom: 16
    }
  })
);
