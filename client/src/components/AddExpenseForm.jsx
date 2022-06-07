import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addExpense } from "../redux/actions/actions";

const AddExpenseForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

//   useEffect(() => {
//     dispatch(getExpenses());
//   }, [dispatch, name, cost]);

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch(addExpense(expense));

    setName("");
    setCost("");
  };

  const handleInput = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setCost(0);
    } else {
      setCost(parseInt(value));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            autocomplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            autocomplete="off"
            value={isNaN(cost) ? "" : cost}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary bg-blue-500">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
