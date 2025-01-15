import React from "react";
import { useMovementStore } from "@/app/store/store";

export default function ItemInfo({ hello, quantity }) {

  const { clearExercise } = useMovementStore((state) => ({
    clearExercise: state.clearExercise,
    
  }));
  

  return (
    <div className="flex items-center justify-between">
      <div className="mt-2">
        <h3
          className={
            hello.result.name === "Add Exercise to Start"
              ? "text-md font-semibold text-red-400"
              : "text-md font-semibold text-gray-600"
          }
        >
          {hello.result.name}
        </h3>
        <p className="mt-1 text-xs text-gray-600">
        </p>
      </div>

      {hello.result.name === "Add Exercise to Start" ? (null) : (
        
        <button
          onClick={() => clearExercise()}
          className="bbg-white hover:bg-gray-100 text-blue-500 font-bold py-1 rounded-full focus:outline-none focus:shadow-outline mr-1 mt-2"
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
