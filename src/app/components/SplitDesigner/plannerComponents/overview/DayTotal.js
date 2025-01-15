import React, { useState, useEffect } from "react";
import { useExerciseStore, useDayStore } from "@/app/store/store";

export default function DayTotal() {
  const { overview } = useExerciseStore((state) => ({
    overview: state.overview,
  }));

  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  let sets = overview
    .filter((item) => item.configure.result.day == day)
    .reduce(
      (accumulator, current) => accumulator + current.configure.result.sets,
      0
    );
  let totalRepsCalc = overview
    .filter((item) => item.configure.result.day == day)
    .map((p) => p.configure.result.reps * p.configure.result.sets);

  let totalReps = totalRepsCalc.reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  let perSetWeight = overview
    .filter((item) => item.configure.result.day == day)
    .map(
      (p) =>
        p.configure.result.reps *
        p.configure.result.sets *
        p.configure.result.weight
    );

  let totalWeight = perSetWeight.reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  return (
    <div>
      <div className="display flex justify-between">
        <p className="my-1 text-xs py-1 px-2 text-gray-700 rounded focus:outline-none focus:shadow-outline">
          <b>Daily Reps</b>
        </p>
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
          <b>{totalReps} Reps</b>
        </p>
      </div>

      <div className="display flex justify-between">
        <p className="my-1 text-xs py-1 px-2 text-gray-700 rounded focus:outline-none focus:shadow-outline">
          <b>Daily Sets</b>
        </p>
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
          <b>{sets} Sets</b>
        </p>
      </div>
      <div className="display flex justify-between">
        <p className="my-1 text-xs py-1 px-2 text-gray-700 rounded focus:outline-none focus:shadow-outline">
          <b>Daily Weight</b>
        </p>
        <p className="my-1 text-xs text-center text-white bg-gray-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
          <b>{totalWeight} Kgs</b>
        </p>
      </div>
    </div>
  );
}
