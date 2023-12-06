
import { SUCCESSFUL } from "../constants/statusCodes";
import { getAllTransactionsApi } from '../api/transactions';
import { 
  GET_ALL_TRANSACTIONS_FAILURE, 
  GET_ALL_TRANSACTIONS_SUCCESS 
} from "../constants/transactionConstants";

const success = (transactions) => ({
  type: GET_ALL_TRANSACTIONS_SUCCESS, transactions
})

const failure = (error) => ({
  type: GET_ALL_TRANSACTIONS_FAILURE, error
})

export const getAllTransactions = () => (dispatch) => {
  getAllTransactionsApi()
  .then((response) => {
    if (response.status === SUCCESSFUL) {
      dispatch(success(response.data.transactions))
    } else {
      dispatch(failure(response));
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  });
};
