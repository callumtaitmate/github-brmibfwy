import React, {useState} from "react";
import { useExerciseStore } from "@/app/store/store";
import { v4 as uuidv4 } from "uuid";

export default function AddCurrentDay({ hello, reps, sets, weight, day }) {
  const updateOverview = useExerciseStore((state) => state.addToOverview);

  const [id, setId] = useState("")

  const dayObj = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: day,
        name: hello.result.name,
        id: id,
      },
    },
  };

  const handleClick = (dayObj) => {
    setId(uuidv4)
    updateOverview(dayObj);
  };

  return (
    <div>
      <button
        disabled={hello.result.name === "Add Exercise to Start"}
        onClick={() => handleClick(dayObj)}
        className={
          hello.result.name == "Add Exercise to Start"
            ? " cursor-not-allowed bg-blue-300 hover:bg-blue-300 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            : " bg-blue-500 hover:bg-blue-500 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
        }
      >
        + Current Day
      </button>
    </div>
  );
}
