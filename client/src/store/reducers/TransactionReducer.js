import {
  GET_ALL_TRANSACTIONS_FAILURE,
  GET_ALL_TRANSACTIONS_SUCCESS
} from "../constants/transactionConstants";

const initialState = {
  transactions: [],
  error: {}
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

    default:
      return state;
  }
};
