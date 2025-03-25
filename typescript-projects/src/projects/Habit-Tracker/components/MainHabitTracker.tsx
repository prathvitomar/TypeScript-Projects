import React from "react";
import AddHabitForm from "./AddHabitForm";
import HabitStats from "./HabitStats";

const MainHabitTracker: React.FC = () => {
  
  return (
    <>
      <div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Habit Tracker
          </dd>
        </div>
        <AddHabitForm />
        <HabitStats />
      </div>
    </>
  );
};

export default MainHabitTracker;
