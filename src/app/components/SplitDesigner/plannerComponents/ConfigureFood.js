"use client";
import { useState, useEffect } from "react";
import {
  useMovementStore,
  useDayStore,
} from "@/app/store/store";
import { v4 as uuidv4 } from "uuid";
import ItemInfo from "./configurefood/ItemInfo";
import AddAllDays from "./configurefood/AddAllDays";
import AddCurrentDay from "./configurefood/AddCurrentDay";

export function ConfigureFood() {
  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const { hello } = useMovementStore((state) => ({
    hello: state.exercise,
  }));

  const [reps, setReps] = useState(8);
  const [sets, setSets] = useState(3);
  const [weight, setWeight] = useState(100);
  const [id, setId] = useState("");

  const handleQuantity = (e) => {
    setReps(e);
  };

  const handlePrice = (e) => {
    setSets(e);
  };

  const handleWeight = (e) => {
    setWeight(e);
    setId(uuidv4);
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Configure Movement</h3>
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-300 bg-whiterounded-lg overflow-hidden max-h-80 overflow-y-auto px-1">
        <ul>
          <li className="bg-gray-100">
            <div>
              <ItemInfo hello={hello} />
              <div className="">
                <h3 className="text-xs font-semibold text-gray-500">
                  Adjust Reps
                </h3>

                <input
                  type="number"
                  id="reps"
                  name="reps"
                  value={reps}
                  required
                  onChange={(e) => handleQuantity(e.target.valueAsNumber)}
                  className="mt-1 focus:outline-none focus:ring-2 pl-1 focus:ring-blue-500 block w-full sm:text-sm rounded-md"
                />
                <h3 className="text-xs font-semibold text-gray-500 mt-2">
                  Adjust Sets
                </h3>
                <input
                  type="number"
                  id="sets"
                  name="sets"
                  value={sets}
                  required
                  onChange={(e) => handlePrice(e.target.valueAsNumber)}
                  className="mt-1 pl-1 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full sm:text-sm rounded-md"
                />
                <h3 className="text-xs font-semibold text-gray-500 mt-2">
                  Adjust Weight (Kgs)
                </h3>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={weight}
                  required
                  onChange={(e) => handleWeight(e.target.valueAsNumber)}
                  className="mt-1 pl-1 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full sm:text-sm rounded-md"
                />
              </div>
              <div className="flex justify-end my-4">
                <AddCurrentDay
                  hello={hello}
                  reps={reps}
                  sets={sets}
                  weight={weight}
                  day={day}
                />
                <div className="">
                  <AddAllDays
                    hello={hello}
                    reps={reps}
                    sets={sets}
                    weight={weight}
                    id={id}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
