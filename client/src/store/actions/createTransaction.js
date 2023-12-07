import {
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE
} from "../constants/transactionConstants";
import { SUCCESSFUL, CREATED } from "../constants/statusCodes";
import { createTransactionApi } from "../api/transactions";
import { getAllTransactions } from "./getAllTransactions";
import { toast } from 'react-toastify';

const success = (transaction) => ({
  type: CREATE_TRANSACTION_SUCCESS,
  transaction,
});

const failure = (error) => ({
  type: CREATE_TRANSACTION_FAILURE,
  error,
});

export const createTransaction = (body) => (dispatch) => {
  createTransactionApi(body)
    .then((response) => {
      if (response.status === SUCCESSFUL || response.status === CREATED) {
        toast.success(`${response.data.message}`);
        dispatch(success(response.data.transaction));
      } else {
        dispatch(failure(response.data.error));
      }
    })
    .catch((err) => {
      dispatch(failure(err));
    }).finally(() => {
      dispatch(getAllTransactions())
    })
};
