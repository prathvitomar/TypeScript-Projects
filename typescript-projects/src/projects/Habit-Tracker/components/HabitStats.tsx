import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { fetchHabits, removeHabit } from "../../../features/HabitTracker/habit-slice";

const HabitStats: React.FC = () => {
  const { habits, isLoading, error } = useSelector(
    (state: RootState) => state.habits
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  const totalCompletedHabits = habits.reduce((total, habit) => total + habit.completedDates.length, 0);

    function remove(id: string) {
      dispatch(removeHabit({ id }));
    }

  if (isLoading)
    return (
      <>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Loading...
          </dd>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {error}
          </dd>
        </div>
      </>
    );

  return (
    <>
      <div>
        <div className="bg-white py-24 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl
              style={{ display: "flex" }}
              className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
            >
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/5 sm:text-3xl text-gray-600">
                  {totalCompletedHabits}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Completed Habits
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/5 sm:text-3xl text-gray-600">{habits.length}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Total Habits
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
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

export default HabitStats;