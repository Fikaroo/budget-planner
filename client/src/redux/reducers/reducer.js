import {
  ADD_EXPENSE,
  ADD_EXPENSES,
  ADD_REMAINING,
  ADD_TOTAL_EXPENSE,
  DELETE_EXPENSE,
  SET_BUDGET,
} from "../actions/actions-type";

const initialState = {
  budget: 0,
  expenses: [],
  totalExpense: 0,
  remaining: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, payload] };
    case ADD_EXPENSES:
      return { ...state, expenses: payload };
    case SET_BUDGET:
      return { ...state, budget: payload };
    case ADD_TOTAL_EXPENSE:
      return { ...state, totalExpense: payload };
    case ADD_REMAINING:
      return { ...state, remaining: payload };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== payload),
      };

    default:
      return state;
  }
};

export default reducer;
