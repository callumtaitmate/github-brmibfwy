import React from "react";
import { useExerciseStore } from "@/app/store/store";

export default function AddAllDays({ hello, reps, sets, weight, id }) {
  const updateOverview = useExerciseStore((state) => state.addToOverview);

  const monday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Monday",
        name: hello.result.name,
        id: id
      },
    },
  };

  const tuesday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Tuesday",
        name: hello.result.name,
        id: id
      },
    },
  };
  
  const wednesday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Wednesday",
        name: hello.result.name,
        id: id
      },
    },
  };
  
  const thursday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Thursday",
        name: hello.result.name,
        id: id
      },
    },
  };
  
  const friday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Friday",
        name: hello.result.name,
        id: id
      },
    },
  };
  
  const saturday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Saturday",
        name: hello.result.name,
        id: id
      },
    },
  };
  
  const sunday = {
    configure: {
      result: {
        reps: reps,
        sets: sets,
        weight: weight,
        day: "Sunday",
        name: hello.result.name,
        id: id
      },
    },
  };


  const handleAdd = () => {
    updateOverview(monday);
    updateOverview(tuesday);
    updateOverview(wednesday);
    updateOverview(thursday);
    updateOverview(friday);
    updateOverview(saturday);
    updateOverview(sunday);
  };

  return (
    <div>
      <button
      
      disabled={hello.result.name == "Add Exercise to Start"}
        className={
          hello.result.name == "Add Exercise to Start"
            ? "cursor-not-allowed bg-blue-300 hover:bg-blue-300 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            : "bg-blue-500 hover:bg-blue-500 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
        }
        onClick={() => handleAdd(monday, tuesday, wednesday, thursday, friday, saturday, sunday)}
      >
        + Add All Days
      </button>
    </div>
  );
}
