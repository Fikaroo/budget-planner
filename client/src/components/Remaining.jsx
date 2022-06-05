import { useSelector } from "react-redux";

const RemainingBudget = () => {
  const expenses = useSelector((state) => state.reducer.expenses);
  const budget = useSelector((state) => state.reducer.budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: ₼{budget - totalExpenses}</span>
    </div>
  );
};

export default RemainingBudget;
