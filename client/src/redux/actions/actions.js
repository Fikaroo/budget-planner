import axios from "axios";
import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET } from "./actions-type";
import { baseUrl } from "../constant";
export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
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

export const postExpense = () => {
  return async (dispatch) => {
    const res = axios.post(`${baseUrl} + addexpense`);
    console.log(res);
  };
};
