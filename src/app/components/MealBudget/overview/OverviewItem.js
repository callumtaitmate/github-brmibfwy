import React from "react";
import { useDayStore } from "@/app/store/store";
import { useOverviewStore } from "@/app/store/store";

export default function OverviewItem({}) {
  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const { overview, clearItem } = useOverviewStore((state) => ({
    overview: state.overview,
    clearItem: state.clearItem,
  }));

  return (
    <div>
      {overview.map((foods, id) => {
        if (day === foods.day) {
          return (
            <ul key={id}>
              <div className="shadow-md rounded-lg overflow-hidden max-h-80 overflow-y-auto my-2 bg-gray-100 flex  justify-between">
                <div className="border-b border-gray-200  px-3 py-2 ">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {foods.label} ({foods.quantity}g) - £{foods.price}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600">
                    <b>{foods.kcal} kCal</b> - {foods.carb}g Carbs | {foods.fat}
                    g Fat | {foods.prot}g Protein
                  </p>
                </div>

                <button
                  onClick={() => clearItem(foods.id, foods.day)}
                  className="bbg-white hover:bg-gray-100 text-blue-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mr-3"
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
