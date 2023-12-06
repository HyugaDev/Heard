import React from "react";
import { transactionStyles } from "./TransactionStyles";

const Transactions = () => {
  const classes = transactionStyles();
  return (
    <h1 className={classes.heading}>Transaction List</h1>
  )
}

export default Transactions;