import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBudget } from "../redux/actions/actions";
const ViewBudget = (props) => {
  const budget = useSelector((state) => state.reducer.budget);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getBudget())
    }, [dispatch])

  console.log(budget);
  return (
    <>
      <span>Budget: ₼{budget}</span>
      <button
        type="button"
        className="btn btn-primary bg-blue-500"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
