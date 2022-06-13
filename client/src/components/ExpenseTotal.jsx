import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalExpense } from "../redux/actions/actions";

const ExpenseTotal = () => {
  const expenses = useSelector((state) => state.reducer.expenses);
  const dispatch = useDispatch();
  const total = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  useEffect(() => {
    dispatch(addTotalExpense(total));
  }, [dispatch, total]);
  return (
    <div className="stat">
      <div className="stat-title">Spent so far</div>
      <div className={`stat-value`}>₼{total}</div>
    </div>
  );
};

export default ExpenseTotal;
