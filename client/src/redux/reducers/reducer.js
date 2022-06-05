import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_BUDGET,
} from "../actions/actions-type";

const initialState = {
  budget: 0,
  expenses: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, payload],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== payload),
      };
    case SET_BUDGET:
      return {
        ...state,
        budget: payload,
      };

    default:
      return state;
  }
};

export default reducer;
