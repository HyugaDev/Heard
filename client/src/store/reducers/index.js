import { combineReducers } from 'redux';
import { transactionReducer } from './TransactionReducer';

const rootReducer = combineReducers({
  transactionReducer
});

export default rootReducer;