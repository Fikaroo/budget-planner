import Budget from "../../components/Budget";
import ExpenseTotal from "../../components/ExpenseTotal";
import ExpenseList from "../../components/ExpenseList";
import AddExpenseForm from "../../components/AddExpenseForm";
import RemainingBudget from "../../components/Remaining";

function MainPage() {
  return (
    <div className="container">
      <div className="flex mt-2 w-full h-16 rounded-md bg-indigo-400 items-center justify-center">
        <h1 className="text-slate-100">My Budget Planner</h1>
      </div>
      <div className="row mt-2">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <RemainingBudget />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-2">Expenses</h3>
      <div className="row ">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-2">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
