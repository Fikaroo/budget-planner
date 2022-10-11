import { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { useSelector, useDispatch } from "react-redux";
// import { postBudget } from "../redux/actions/actions";
import { setBudget } from "../redux/actions/actions";

const Budget = () => {
  const budget = useSelector((state) => state.reducer.budget);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    // dispatch(postBudget(value));
    dispatch(setBudget(value));
    setIsEditing(false);
  };

  return (
    <div className="stat">
      <div className="stat-title">Budget</div>
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
