import React from "react";
import { AddFood } from "../components/SplitDesigner/plannerComponents/AddFood";
import { ConfigureFood } from "../components/SplitDesigner/plannerComponents/ConfigureFood";
import { Overview } from "../components/SplitDesigner/plannerComponents/Overview";

export default function Workout() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Workout Planner
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Design your perfect workout split, track progress, and optimize your training routine.
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