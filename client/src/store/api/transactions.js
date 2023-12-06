import { get, post, patch, Delete } from '../server.js'

export const getAllTransactionsApi = () => get(`${process.env.REACT_APP_BASE_URL}/api/transactions`);

export const editTransactionApi = (transactionId, data) => {
  return patch(`${process.env.REACT_APP_BASE_URL}/api/transactions/${transactionId}`, data);
};

export const createTransactionApi = (data) => {
  return post(`${process.env.REACT_APP_BASE_URL}/api/transactions`, data);
};

export const deleteTransactionApi = (transactionId) => {
  return Delete(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/${transactionId}`);
};
