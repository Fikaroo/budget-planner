import { useSelector } from "react-redux";

const ExpenseTotal = () => {
  const expenses = useSelector((state) => state.reducer.expenses);

  const total = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  return (
    <div className="alert alert-primary p-4">
      <span>Spent so far: ₼{total}</span>
    </div>
  );
};

export default ExpenseTotal;
