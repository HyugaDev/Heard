import React, { useEffect, useState } from "react";
import { transactionStyles } from "./TransactionStyles";
import TransactionsList from "./List";
import { getAllTransactions } from "../../store/actions/getAllTransactions";
import { useDispatch, useSelector } from "react-redux";

const Transactions = () => {
  const classes = transactionStyles();
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactionReducer);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, []);

  return (
    <>
      <h1 className={classes.heading}>Transaction List</h1>
      <TransactionsList transactions={transactions} />
    </>

  )
}

export default Transactions;