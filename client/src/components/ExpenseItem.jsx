import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteExpenseApi } from "../redux/actions/actions";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch(deleteExpenseApi(props.id));
  };

  return (
    <li className="list-group-item flex justify-content-between items-center justify-center align-items-center">
      {props.name}
      <div className="flex">
        <span className="badge badge-primary badge-pill flex mr-3 items-center justify-center align-items-center">
          ₼{props.cost}
        </span>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          className="hover:cursor-pointer"
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
