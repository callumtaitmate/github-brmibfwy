import React from "react";
import { useDayStore } from "@/app/store/store";
import { useExerciseStore } from "@/app/store/store";

export default function OverviewItem({}) {
  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const { overview, clearItem } = useExerciseStore((state) => ({
    overview: state.overview,
    clearItem: state.clearItem,
  }));

  return (
    <div>
      {overview.map((foods, id) => {
        if (day === foods.configure.result.day) {
          return (
            <ul key={id}>
              <div className="rounded-lg overflow-hidden max-h-80 overflow-y-auto bg-gray-100 flex  justify-between">
                <div className="py-1">
                  <h3 className="text-md font-semibold text-gray-700">
                    {foods.configure.result.name}
                  </h3>

                  <p className="text-xs text-gray-800">
                    <b>Reps: </b>x{foods.configure.result.reps}
                    <b> Sets:  </b> x{foods.configure.result.sets}
                    <b> Weight: </b> {foods.configure.result.weight}Kgs
                  </p>
                </div>

                <button
                  onClick={() => clearItem(foods.configure.result.id, foods.configure.result.day)}
                  
                  className="bbg-white hover:bg-gray-100 text-blue-500 font-bold py-1 px-1 rounded-full focus:outline-none focus:shadow-outline mr-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="red"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </ul>
          );
        }
      })}
    </div>
  );
}
