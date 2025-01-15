"use client";
import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { useExerciseStore } from "@/app/store/store";

export default function Download() {
  const { data } = useExerciseStore((state) => ({
    data: state.overview,
  }));


  
  if (data.length == 0)
    return (
      <div className="mt-1 text-center cursor-not-allowed bg-blue-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
        Export
      </div>
    );
  else {
    return (
      <CSVLink data={data} filename={"workoutplan.csv"}>
        <button className="w-full mt-1 text-center bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
          Export
        </button>
      </CSVLink>
    );
  }
}
