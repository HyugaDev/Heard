import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import { transactionStyles } from '../TransactionStyles';

function DeleteConfirmationModal({ isOpen, onRequestClose, onConfirm }) {
  const classes = transactionStyles();

  return (
    <Dialog open={isOpen} onClose={onRequestClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this transaction?</p>
        <div className={classes.buttons}>
          <Button onClick={onConfirm} variant="contained" color="error">
            Confirm
          </Button>
          <Button onClick={onRequestClose} variant="contained" className={classes.greyButton}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmationModal;
