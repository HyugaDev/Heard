import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Box, TextField, TextareaAutosize, Button } from "@mui/material";
import { transactionStyles } from "../TransactionStyles";
import { createTransaction } from "../../../store/actions/createTransaction";
import { useDispatch } from "react-redux";
import { getAllTransactions } from "../../../store/actions/getAllTransactions";
import { editTransaction } from "../../../store/actions/editTransaction";

const TransactionForm = ({ isOpen, handleClose, selectedTransaction }) => {
  const classes = transactionStyles();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    amount: Yup.number().required("Amount is required").positive("Amount must be positive"),
    toAccount: Yup.string().required("To Account is required"),
    fromAccount: Yup.string().required("From Account is required"),
  });

  useEffect(() => {
    if (selectedTransaction) {
      formik.setValues({
        title: selectedTransaction.title || "",
        description: selectedTransaction.description || "",
        amount: selectedTransaction.amount || 0,
        toAccount: selectedTransaction.toAccount || "",
        fromAccount: selectedTransaction.fromAccount || "",
      });
    }
  }, [selectedTransaction]);

  useEffect(() => {
    if (!isOpen) {
      formik.resetForm();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    formik.resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      amount: "",
      toAccount: "",
      fromAccount: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (selectedTransaction) {
        const data = {
          title: values.title,
          description: values.description,
          amount: values.amount,
          toAccount: values.toAccount,
          fromAccount: values.fromAccount
        }
        dispatch(editTransaction(selectedTransaction.transactionId, data));
      }
      else dispatch(createTransaction(values));
      handleClose();
    },
  });

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Box sx={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          width: 400, 
          bgcolor: "background.paper", 
          boxShadow: 24,
          p: 2 
        }}
      >
        <div className={classes.crossButton}>
          <button 
            onClick={handleClose} 
            className={classes.closeButton}
          >
            &times;
          </button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            sx={{ mb: 2 }}
          />
          <TextareaAutosize
            minRows={3}
            style={{
              width: "100%",
              marginBottom: 16,
              ...(formik.touched.description && formik.errors.description && { border: '1px solid red' }),
            }}
            id="description"
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <TextField
            fullWidth
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="toAccount"
            name="toAccount"
            label="To Account"
            value={formik.values.toAccount}
            onChange={formik.handleChange}
            error={formik.touched.toAccount && Boolean(formik.errors.toAccount)}
            helperText={formik.touched.toAccount && formik.errors.toAccount}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="fromAccount"
            name="fromAccount"
            label="From Account"
            value={formik.values.fromAccount}
            onChange={formik.handleChange}
            error={formik.touched.fromAccount && Boolean(formik.errors.fromAccount)}
            helperText={formik.touched.fromAccount && formik.errors.fromAccount}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mt: 2 }}>
            <Button variant="contained" onClick={handleClose} sx={{ mr: 2 }} className={classes.greyButton}>
              Close
            </Button>
            <Button color="primary" variant="contained" type="submit">
              {selectedTransaction ? "Edit" : "Create"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default TransactionForm;