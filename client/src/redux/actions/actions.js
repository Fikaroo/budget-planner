// import axios from "axios";
import {
  ADD_EXPENSE,
  ADD_EXPENSES,
  DELETE_EXPENSE,
  SET_BUDGET,
} from "./actions-type";
// import { baseUrl } from "../constant";
export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const setBudget = (payload) => ({
  type: SET_BUDGET,
  payload,
});

// export const postExpense = (expense) => {
//   return async (dispatch) => {
//     const id = expense.id;
//     const name = expense.name;
//     const cost = expense.cost;
//     await axios.post(`${baseUrl}/addexpense`, {
//       id: id,
//       name: name,
//       cost: cost,
//     });
//     dispatch(addExpense(expense));
//   };
// };

// export const getExpenses = () => {
//   return async (dispatch) => {
//     const res = await axios.get(`${baseUrl}/expenses`);
//     const data = await res.data;
//     dispatch(addExpenses(data));
//   };
// };
