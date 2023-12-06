import {
  CREATE_TRANSACTION_FAILURE,
  CREATE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_SUCCESS,
  EDIT_TRANSACTION_FAILURE,
  EDIT_TRANSACTION_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
  GET_ALL_TRANSACTIONS_SUCCESS
} from "../constants/transactionConstants";

const initialState = {
  transactions: [],
  error: {},
  transaction: {},
  message: "",
};

export const transactionReducer = (state = initialState,action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS_SUCCESS:
      return {
        transactions: action.transactions,
      };

    case GET_ALL_TRANSACTIONS_FAILURE:
      return {
        error: action.error
      };
    case CREATE_TRANSACTION_SUCCESS:
      return {
        transaction: action.transaction,
      };

    case CREATE_TRANSACTION_FAILURE:
      return {
        error: action.error,
      };

    case EDIT_TRANSACTION_SUCCESS:
      return {
        transaction: action.transaction,
      };

    case EDIT_TRANSACTION_FAILURE:
      return {
        error: action.error,
      };

    case DELETE_TRANSACTION_SUCCESS:
      return {
      message: action.message,
      };
    case DELETE_TRANSACTION_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};
