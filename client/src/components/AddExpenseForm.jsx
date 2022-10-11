import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

// import { getExpenses, postExpense } from "../redux/actions/actions";
import { addExpense } from "../redux/actions/actions";
import { useEffect } from "react";

const AddExpenseForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  // useEffect(() => {
  //   dispatch(getExpenses());
  // }, [dispatch, name, cost]);

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      key: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    // dispatch(postExpense(expense));
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
      <div className="form-control space-y-3">
        <label className="input-group input-group-vertical md:w-full ">
          <span className="bg-neutral">Name</span>
          <input
            required="required"
            type="text"
            placeholder="Expenses name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered focus:outline-none"
          />
        </label>
        <label className="input-group input-group-horizontal ">
          <span className="bg-neutral">₼</span>
          <input
            required="required"
            type="text"
            className="input input-bordered focus:outline-none w-full"
            id="name"
            value={isNaN(cost) ? "" : cost}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className="flex w-full justify-center mt-2">
        <button type="submit" className="btn btn-accent w-full md:btn-wide">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
