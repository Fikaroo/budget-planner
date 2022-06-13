import { useDispatch } from "react-redux";
import { deleteExpenseApi } from "../redux/actions/actions";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch(deleteExpenseApi(props.id));
  };

  return (
    <li className="flex justify-between items-center px-12 rounded bg-base-100 py-2">
      {props.name}
      <div className="flex justify-center items-center">
        <span className="badge badge-primary flex mr-3 justify-center items-center">
          ₼{props.cost}
        </span>
        <button className="btn btn-square btn-sm" onClick={handleDeleteExpense}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
