import React from "react";
import { useConfigureSotre } from "@/app/store/store";

export default function ItemInfo({ hello, quantity, kcal, carb, fat, prot }) {
  const ENERC_KCAL = parseInt(hello.result.food.nutrients.ENERC_KCAL);
  const CHOCDF = parseInt(hello.result.food.nutrients.CHOCDF);
  const FAT = parseInt(hello.result.food.nutrients.FAT);
  const PROCNT = parseInt(hello.result.food.nutrients.PROCNT);

  const { clearConfiguration } = useConfigureSotre((state) => ({
    clearConfiguration: state.clearConfiguration,
  }));

  return (
    <div className="flex items-center justify-between shadow-sm rounded-lg">
      <div className="px-4 py-2 ">
        <h3
          className={
            hello.result.food.label === "Add food to start"
              ? "text-md font-semibold text-blue-400"
              : "text-md font-semibold text-gray-800"
          }
        >
          {hello.result.food.label} - {quantity}g
        </h3>
        <p className="mt-1 text-xs text-gray-600">
          <b>{kcal}kCal</b> - {carb}g Carbs | {fat}g Fat | {prot}g
          Protein
        </p>
      </div>

      {(hello.result.food.label) === "Add food to start" ? (null) : (
        
        <button
          onClick={() => clearConfiguration()}
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
      ) 
      }
    </div>
  );
}
