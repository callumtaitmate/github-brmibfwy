import React from "react";
import { useOverviewStore, useDayStore } from "@/app/store/store";

export default function DayTotal() {
  const { overview } = useOverviewStore((state) => ({
    overview: state.overview,
  }));

  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  let kcal = overview
    .filter((item) => item.day == day)
    .reduce((accumulator, current) => accumulator + current.kcal, 0);
  let carb = overview
    .filter((item) => item.day == day)
    .reduce((accumulator, current) => accumulator + current.carb, 0);
  let fat = overview
    .filter((item) => item.day == day)
    .reduce((accumulator, current) => accumulator + current.fat, 0);
  let prot = overview
    .filter((item) => item.day == day)
    .reduce((accumulator, current) => accumulator + current.prot, 0);
  let price = overview
    .filter((item) => item.day == day)
    .reduce((accumulator, current) => accumulator + current.price, 0);

  const priceParsed = parseFloat(price).toFixed(2);

  return (
    <div className="display flex justify-between">
      <p className="my-3 text-xs text-center text-white bg-blue-500 py-1 px-2  rounded focus:outline-none focus:shadow-outline">
        <b>Day Total</b> {kcal} Kcal - {carb}g Carbs | {fat}g Fat | {prot}g
        Protein
      </p>

      <p className="my-3 text-xs text-center text-white bg-blue-500 py-1 px-2 ml-4 rounded focus:outline-none focus:shadow-outline">
        <b>{priceParsed} GBP</b>
      </p>
    </div>
  );
}
