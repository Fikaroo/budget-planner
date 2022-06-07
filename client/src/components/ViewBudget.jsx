const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: ₼{props.budget}</span>
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
