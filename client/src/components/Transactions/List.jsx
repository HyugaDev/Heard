import React, { useState } from "react";
import { Button } from '@mui/material';
import TransactionsTable from "./Table";
import { transactionStyles } from "./TransactionStyles";
import TransactionForm from "./Modal/Form";

const TransactionsList = ({transactions}) => {
  const classes = transactionStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setModalIsOpen(true);
  };

  const handleModalOpen = () => setModalIsOpen(true);
  const handleModalClose = () => {
    setSelectedTransaction(null);
    setModalIsOpen(false);
  }

  return (
    <div className={classes.transactionList}>
      <Button
        variant="contained"
        className={classes.greyButton}
        onClick={handleModalOpen}
      >
        + Add
      </Button>
      <TransactionsTable transactions={transactions} handleEditClick={handleEditClick} />
      <TransactionForm 
        isOpen={modalIsOpen} 
        handleClose={handleModalClose} 
        selectedTransaction={selectedTransaction}
      />
    </div>
  );
};

export default TransactionsList;
