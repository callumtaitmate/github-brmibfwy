import React from "react";
import { useOverviewStore } from "@/app/store/store";

export default function AddAllDays({ postCalcObject, hello }) {
  const updateOverview = useOverviewStore((state) => state.addToOverview);

  const twat = {
    quantity: postCalcObject.quantity,
    price: postCalcObject.price,
    kcal: postCalcObject.kcal,
    carb: postCalcObject.carb,
    fat: postCalcObject.fat,
    prot: postCalcObject.prot,
    label: postCalcObject.label,
    id: postCalcObject.id,
    day: postCalcObject.day,
  };

  const monday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Monday",
  };

  const tuesday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Tuesday",
  };
  const wednesday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Wednesday",
  };
  const thursday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Thursday",
  };
  const friday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Friday",
  };
  const saturday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Saturday",
  };
  const sunday = {
    quantity: twat.quantity,
    price: twat.price,
    kcal: twat.kcal,
    carb: twat.carb,
    fat: twat.fat,
    prot: twat.prot,
    label: twat.label,
    id: twat.id,
    day: "Sunday",
  };

  const handleAdd = (
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  ) => {
    updateOverview(monday);
    updateOverview(tuesday);
    updateOverview(wednesday);
    updateOverview(thursday);
    updateOverview(friday);
    updateOverview(saturday);
    updateOverview(sunday);
  };

  return (
    <div className="bg-gray-100">
      <button
        className={
          hello.result.food.label == "Add food to start"
            ? "cursor-not-allowed bg-blue-300 hover:bg-blue-300 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none"
            : "bg-blue-500 hover:bg-blue-500 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none"
        }
        onClick={() =>
          handleAdd(
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
          )
        }

        disabled={
          hello.result.food.label == "Add food to start"}
      >
        + Add All Days
      </button>
    </div>
  );
}
