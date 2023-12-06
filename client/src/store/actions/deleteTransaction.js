import { 
  DELETE_TRANSACTION_SUCCESS, 
  DELETE_TRANSACTION_FAILURE
} from "../constants/transactionConstants";
import { SUCCESSFUL } from "../constants/statusCodes";
import { deleteTransactionApi } from "../api/transactions";

const success = (message) => ({
  type: DELETE_TRANSACTION_SUCCESS, message
})

const failure = (error) => ({
  type: DELETE_TRANSACTION_FAILURE, error
})

export const deleteTransaction = (transactionId) => (dispatch) => {
  deleteTransactionApi(transactionId)
  .then((response) => {
    if (response.status === SUCCESSFUL) {
      dispatch(success(response.data.message));
    }
    else {
      dispatch(failure(response.data.message));
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  })
};
