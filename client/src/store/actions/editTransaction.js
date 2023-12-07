import {
  EDIT_TRANSACTION_SUCCESS,
  EDIT_TRANSACTION_FAILURE,
} from "../constants/transactionConstants";
import { SUCCESSFUL } from "../constants/statusCodes";
import { editTransactionApi } from "../api/transactions";
import { getAllTransactions } from "./getAllTransactions";

const success = (transaction) => ({
  type: EDIT_TRANSACTION_SUCCESS,
  transaction,
});

const failure = (error) => ({
  type: EDIT_TRANSACTION_FAILURE,
  error,
});

export const editTransaction = (transactionId, body) => (dispatch) => {
  editTransactionApi(transactionId, body)
    .then((response) => {
      if (response.status === SUCCESSFUL) {
        dispatch(success(response.data.transaction));
      } else {
        dispatch(failure(response));
      }
    })
    .catch((err) => {
      dispatch(failure(err));
    }).finally(() => {
      dispatch(getAllTransactions())
    })
};
