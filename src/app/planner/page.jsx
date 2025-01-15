"use client";
import Meal from "./meal";
import Workout from "./Workout";
import { useState } from "react";

export default function Planner() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">mealbudget.pro</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setIsChecked(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    !isChecked ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Meals
                </button>
                <button
                  onClick={() => setIsChecked(true)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isChecked ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Exercises
                </button>
              </div>
              <button className="btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {isChecked ? <Workout /> : <Meal />}
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 mealbudget.pro - Simplify your meal and workout planning
          </p>
        </div>
      </footer>
    </div>
  );
}