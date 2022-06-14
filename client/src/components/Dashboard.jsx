import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { budget, remaining, totalExpense } = useSelector(
    (state) => state.reducer
  );
  const perRemainig = ((remaining * 100) / budget).toFixed();
  const perExpenses = ((budget * totalExpense) / 100).toFixed();
  const styleR = { "--value": perRemainig > 0 ? perRemainig : 0 };
  const styleE = { "--value": perExpenses < 100 ? perExpenses : 0 };

  return (
    <>
      <div className="flex justify-between sm:px-16 md:px-4">
        <div className="flex flex-col justify-center items-center">
          <span>Remaining</span>
          <div
            className="radial-progress bg-primary text-primary-content border-[14px] sm:border-[32px] md:border-8 border-primary"
            style={styleR}
          >
            {perRemainig > 0 ? perRemainig : 0}%
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>Expenses</span>
          <div
            className="radial-progress bg-primary text-primary-content border-[14px] sm:border-[32px] md:border-8 border-primary"
            style={styleE}
          >
            {perExpenses < 100  ? perExpenses : 0}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
