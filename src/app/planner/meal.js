import React from "react";
import { AddFood } from "../components/MealBudget/AddFood";
import { ConfigureFood } from "../components/MealBudget/ConfigureFood";
import { Overview } from "../components/MealBudget/Overview";

export default function Meal() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Meal Planner
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Plan your meals, track nutrients, and manage your food budget all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <AddFood />
        </div>
        <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <ConfigureFood />
        </div>
        <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
          <Overview />
        </div>
      </div>
    </div>
  );
}