import { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  const handleInput = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value === "") {
      setValue(0);
    } else {
      setValue(parseInt(value));
    }
  };
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="form-control w-12">
          <label className="input-group">
            <span>₼</span>
            <input
              required="required"
              type="text"
              className="input focus:outline-none input-sm"
              id="name"
              value={isNaN(value) ? "" : value}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="stat-actions m-0">
          <button
            type="button"
            className="btn btn-sm btn-warning"
            onClick={() => props.handleSaveClick(value)}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBudget;
