import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRemaining } from "../redux/actions/actions";

const RemainingBudget = () => {
  const expenses = useSelector((state) => state.reducer.expenses);
  const budget = useSelector((state) => state.reducer.budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);
  const dispatch = useDispatch();
  const remaining = budget - totalExpenses;
  const alertType =
    totalExpenses === 0
      ? "stat-value"
      : totalExpenses > budget
      ? "text-error"
      : "text-success";

  useEffect(() => {
    dispatch(addRemaining(remaining));
  }, [dispatch, remaining]);

  return (
    <div className="stat">
      <div className="stat-title">Remaining</div>
      <div className={`stat-value ${alertType}`}>₼{remaining}</div>
    </div>
  );
};

export default RemainingBudget;
