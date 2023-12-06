import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { transactionStyles } from "./TransactionStyles";
import { getAllTransactions } from "../store/actions/getAllTransactions";

const Transactions = () => {
  const classes = transactionStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  },[])

  return (
    <h1 className={classes.heading}>Transaction List</h1>
  )
}

export default Transactions;