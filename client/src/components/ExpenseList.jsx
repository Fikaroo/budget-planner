import { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.reducer.expenses);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (e) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(e.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <div className="form-control">
        <div className="input-group justify-center">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered focus:outline-none w-full max-w-md"
            onChange={handleChange}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className="mt-3 space-y-3 flex flex-col h-72 overflow-auto">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.key}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
