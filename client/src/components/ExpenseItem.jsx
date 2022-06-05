import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/actions/actions";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch(deleteExpense(props.id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ₼{props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
