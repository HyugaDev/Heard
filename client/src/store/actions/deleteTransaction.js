import {
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE
} from "../constants/transactionConstants";
import { SUCCESSFUL } from "../constants/statusCodes";
import { deleteTransactionApi } from "../api/transactions";
import { getAllTransactions } from "./getAllTransactions";
import { toast } from 'react-toastify';

const success = (message) => ({
  type: DELETE_TRANSACTION_SUCCESS,
  message,
});

const failure = (error) => ({
  type: DELETE_TRANSACTION_FAILURE,
  error,
});

export const deleteTransaction = (transactionId) => (dispatch) => {
  deleteTransactionApi(transactionId)
  .then((response) => {
    if (response.status === SUCCESSFUL) {
      toast.success(`${response.data.message}`);
      dispatch(success(response.data.message));
    }
    else {
      dispatch(failure(response.data.error));
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  }).finally(() => {
    dispatch(getAllTransactions())
  })
};
