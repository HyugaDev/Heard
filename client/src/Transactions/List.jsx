import React from "react";
import { Button } from '@mui/material';
import TransactionsTable from "./Table";
import { transactionStyles } from "./TransactionStyles";

const TransactionsList = ({transactions}) => {
  const classes = transactionStyles();

  return (
    <div className={classes.transactionList}>
      <Button
        variant="contained"
        className={classes.addButton}
      >
        + Add
      </Button>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default TransactionsList;
