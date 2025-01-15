import React, { useState } from "react";
import { useDayStore } from "@/app/store/store";
export default function Weeks() {

  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const updateDay = useDayStore((state) => state.updateDay);


  return (
    <div className="display inline">
      <button
        onClick={() => updateDay("Monday")}
        className={
          day === "Monday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
        }
      >
        Monday
      </button>
      <button
        onClick={() => updateDay("Tuesday")}
        className={
          day === "Tuesday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline"
        }
      >
        Tuesday
      </button>
      <button
        onClick={() => updateDay("Wednesday")}
        className={
          day === "Wednesday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline"
        }
      >
        Wednesday
      </button>

      <button
        onClick={() => updateDay("Thursday")}
        className={
          day === "Thursday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline"
        }
      >
        Thursday
      </button>

      <button
        onClick={() => updateDay("Friday")}
        className={
          day === "Friday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
        }
      >
        Friday
      </button>

      <button
        onClick={() => updateDay("Saturday")}
        className={
          day === "Saturday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline"
        }
      >
        Saturday
      </button>

      <button
        onClick={() => updateDay("Sunday")}
        className={
          day === "Sunday"
            ? "bg-gray-600 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
            : "bg-gray-400 hover:bg-gray-500 text-white text-xs font-semibold py-1 px-2 mr-1 rounded focus:outline-none focus:shadow-outline mb-1"
        }
      >
        Sunday
      </button>
    </div>
  );
}
