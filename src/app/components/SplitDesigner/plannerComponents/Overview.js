"use client";
import React from "react";
import { useExerciseStore } from "@/app/store/store";
import Weeks from "./overview/weeks";
import OverviewItem from "./overview/OverviewItem";
import Download from "./overview/Download";
import DayTotal from "./overview/DayTotal";
import WeekTotal from "./overview/WeekTotal";

export function Overview() {
  const { clearAll } = useExerciseStore((state) => ({
    clearAll: state.clearAll,
  }));

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-3">Session Overview</h3>
      <Weeks />
      <div className="mt-2">
        <OverviewItem />
      </div>
      <div className="bg-gray-100 rounded-lg py-2 mt-2">
        
      <h3 className="text-xl font-semibold mb-3">Breakdown</h3>
        <div>
          <DayTotal />
          <WeekTotal />
          <div className="mt-2">
            <button
              onClick={() => clearAll()}
              className="w-full text-center bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Clear All
            </button>
            <div className="mt-5">
              <Download />
              <button className="mt-1 w-full text-center cursor-not-allowed bg-green-300 hover:bg-green-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign up to save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
