"use client";
import React, { useState, useEffect, useRef } from "react";
import FoodResults from "./addfood/FoodResults";
export function AddFood({}) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/exercises?query=${query}`);
      const exercises = await response.json();
      setResults(exercises);
    };
    if (query !== "" && query.length > 2) {
      fetchData();
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e);
  };

  return (
    <div className="rounded-lg p-6 bg-gray-100">
      <h3 className="text-xl font-semibold mb-3">Add Movement</h3>
      <div className="rounded-lg">
        <div className="relative mb-1 rounded-m">
          <input
            className="mt-1 py-1 pl-1 focus:outline-none focus:ring-2 shadow-sm focus:ring-blue-500 block w-full sm:text-sm rounded-md"
            type="text"
            placeholder="Search for exercise"
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        
        <p className="text-xs text-right text-red-400 font-semibold my-1">
          (Basic Search Functionality)
        </p>
      </div>{" "}
      {results != null && (
        <FoodResults results={results} setResults={setResults} />
      )}
    </div>
  );
}
