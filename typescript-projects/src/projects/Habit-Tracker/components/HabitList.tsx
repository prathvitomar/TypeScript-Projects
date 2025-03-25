import React from "react";
import { RootState, AppDispatch } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { removeHabit } from "../../../features/HabitTracker/habit-slice";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();

  function remove(id: string) {
    dispatch(removeHabit({ id }));
  }

  return (
    <>
      <div>
        <div>
          {habits.length > 0 && (
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Habit Tracker
              </dd>
            </div>
          )}
          <ul role="list" className="divide-y divide-gray-100">
            {habits.length > 0 &&
              habits.map((habit, i) => (
                <li key={i} className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm/6 font-semibold text-gray-900">
                        {habit.name}
                      </p>
                      <p className="mt-1 truncate text-xs/5 text-gray-500">
                        Created at : {habit.createdAt.split("T")[0]}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    className="hidden shrink-0 sm:flex sm:flex-col sm:items-end"
                  >
                    <p className="text-sm/6 text-gray-900 m-5">
                      {habit.frequency}
                    </p>
                    <button
                      onClick={() => remove(habit.id)}
                      className="cursor-pointer border-2 text-sm/6 text-gray-900 m-5"
                    >
                      🗑️
                    </button>
                    <p className="text-sm/6 text-gray-900 m-5">
                      {habit.completedDates.includes(
                        habit.createdAt.split("T")[0]
                      )
                        ? "Completed"
                        : "Incomplete"}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HabitList;
