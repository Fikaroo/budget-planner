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
      <input
        required="required"
        type="text"
        className="form-control mr-3"
        id="name"
        value={isNaN(value) ? "" : value}
        onChange={handleInput}
      />
      <button
        type="button"
        className="btn btn-primary bg-blue-500"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
