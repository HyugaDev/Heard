import { get } from '../server.js'

export const getAllTransactionsApi = () => get(`${process.env.REACT_APP_BASE_URL}/api/transactions`);
