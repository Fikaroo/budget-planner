import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBudget } from "../redux/actions/actions";
const ViewBudget = (props) => {
  const budget = useSelector((state) => state.reducer.budget);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBudget());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="stat-value">₼{budget}</div>
        <div className="stat-actions m-0">
          <button
            className="btn btn-sm btn-success"
            onClick={props.handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewBudget;
