import axios from "axios";
import {
  ADD_EXPENSE,
  ADD_EXPENSES,
  ADD_REMAINING,
  ADD_TOTAL_EXPENSE,
  DELETE_EXPENSE,
  SET_BUDGET,
} from "./actions-type";
import { baseUrl } from "../constant";

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const addTotalExpense = (payload) => ({
  type: ADD_TOTAL_EXPENSE,
  payload,
});

export const addRemaining = (payload) => ({
  type: ADD_REMAINING,
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

export const postBudget = (payload) => {
  return async (dispatch) => {
    await axios.post(`${baseUrl}/addbudget`, {
      budget: payload,
    });
    dispatch(setBudget(payload));
  };
};

export const getBudget = () => {
  return async (dispatch) => {
    const res = await axios.get(`${baseUrl}/budget`);
    const data = await res.data;
    dispatch(setBudget(data[0].budget));
  };
};

export const postExpense = (expense) => {
  return async (dispatch) => {
    const key = expense.key;
    const name = expense.name;
    const cost = expense.cost;
    await axios.post(`${baseUrl}/addexpense`, {
      key: key,
      name: name,
      cost: cost,
    });
    dispatch(addExpense(expense));
    dispatch(getExpenses());
  };
};

export const getExpenses = () => {
  return async (dispatch) => {
    const res = await axios.get(`${baseUrl}/expenses`);
    const data = await res.data;
    dispatch(addExpenses(data));
  };
};

export const deleteExpenseApi = (payload) => {
  return async (dispatch) => {
    const id = payload;
    await axios.delete(`${baseUrl}/deleteexpense/${id}`);
    dispatch(deleteExpense(payload));
  };
};
