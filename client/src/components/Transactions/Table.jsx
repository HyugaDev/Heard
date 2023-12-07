import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableRow, 
  Button, 
  TableHead 
} from '@mui/material';
import { transactionStyles } from "./TransactionStyles";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../store/actions/deleteTransaction";
import { getAllTransactions } from "../../store/actions/getAllTransactions";
import DeleteConfirmationModal from "./Modal/confirmDelete";

const TransactionsTable = ({transactions, handleEditClick}) => {
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const classes = transactionStyles();
  const dispatch = useDispatch();

  const handleDeleteTransaction = (transactionId) => {
    dispatch(deleteTransaction(transactionId));
    setConfirmDeleteOpen(false);
  }

  const handleConfirmDeleteModal = () => setConfirmDeleteOpen(true);

  const onRequestClose = () => setConfirmDeleteOpen(false);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">TITLE</TableCell>
          <TableCell align="center">DESCRIPTION</TableCell>
          <TableCell align="center">AMOUNT</TableCell>
          <TableCell align="center">TO ACCOUNT</TableCell>
          <TableCell align="center">FROM ACCOUNT</TableCell>
          <TableCell align="center"></TableCell> 
          <TableCell align="center"></TableCell> 
        </TableRow>
      </TableHead>

      <TableBody>
        {transactions?.map((transaction) => (
          <React.Fragment key={transaction.transactionId}>
            <TableRow key={transaction.transactionId}>
              <TableCell align="center">{transaction.title}</TableCell>
              <TableCell align="center">{transaction.description}</TableCell>
              <TableCell align="center">{transaction.amount}</TableCell>
              <TableCell align="center">{transaction.toAccount}</TableCell>
              <TableCell align="center">{transaction.fromAccount}</TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  className={classes.editButton}
                  color="primary"
                  onClick={() => handleEditClick(transaction)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  className={classes.removeButton}
                  onClick={handleConfirmDeleteModal}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
            <DeleteConfirmationModal 
              isOpen={confirmDeleteOpen} 
              onRequestClose={onRequestClose}
              onConfirm={() => handleDeleteTransaction(transaction.transactionId)}
            />
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
