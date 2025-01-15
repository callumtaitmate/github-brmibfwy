"use client";
import React from "react";
import { useOverviewStore } from "@/app/store/store";
import { CSVLink, CSVDownload } from "react-csv";

export default function Download() {
  const { data } = useOverviewStore((state) => ({
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
      <CSVLink data={data} filename={"mealplan.csv"}>
        <button className="w-full mt-1 text-center bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
          Export
        </button>
      </CSVLink>
    );
  }
}
