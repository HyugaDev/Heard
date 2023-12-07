import React from "react";
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

const TransactionsTable = ({transactions, handleEditClick}) => {

  const classes = transactionStyles();
  const dispatch = useDispatch();

  const handleDeleteTransaction = (transactionId) => {
    dispatch(deleteTransaction(transactionId));
    dispatch(getAllTransactions());
  }

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
                onClick={() => handleDeleteTransaction(transaction.transactionId)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
