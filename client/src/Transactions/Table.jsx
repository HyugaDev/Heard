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

const TransactionsTable = ({transactions}) => {
  const classes = transactionStyles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          {/* <TableCell>TITLE</TableCell> */}
          <TableCell align="center">DESCRIPTION</TableCell>
          <TableCell align="center">AMOUNT</TableCell>
          <TableCell align="center">TO ACCOUNT</TableCell>
          <TableCell align="center">FROM ACCOUNT</TableCell>
          <TableCell align="center"></TableCell> 
          <TableCell align="center"></TableCell> 
        </TableRow>
      </TableHead>

      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.transactionId}>
            {/* <TableCell align="center">{transaction.transactionId}</TableCell> */}
            <TableCell align="center">{transaction.description}</TableCell>
            <TableCell align="center">{transaction.amount}</TableCell>
            <TableCell align="center">{transaction.toAccount}</TableCell>
            <TableCell align="center">{transaction.fromAccount}</TableCell>

            <TableCell align="right">
              <Button
                variant="contained"
                className={classes.editButton}
                color="primary"
                // Add onClick handler for edit
              >
                Edit
              </Button>
              <Button
                variant="contained"
                className={classes.removeButton}
                // Add onClick handler for delete
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
