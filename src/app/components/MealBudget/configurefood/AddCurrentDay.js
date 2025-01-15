import React,{useState} from "react";
import { useOverviewStore } from "@/app/store/store";
import { v4 as uuidv4 } from "uuid";

export default function AddCurrentDay({ hello, postCalcObject }) {
  const updateOverview = useOverviewStore((state) => state.addToOverview);

  const [id, setId] = useState("");

  const handleClick = (postCalcObject) => {
    setId(uuidv4);
    updateOverview(postCalcObject);
  };

  return (
    <div className="bg-gray-100">
      <button
        disabled={hello.result.food.label == "Add food to start"}
        onClick={() => handleClick(postCalcObject)}
        className={
          hello.result.food.label == "Add food to start"
            ? " cursor-not-allowed bg-blue-300 hover:bg-blue-300 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none"
            : " bg-blue-500 hover:bg-blue-500 text-white text-xs font-bold py-1 px-4 mr-2 rounded focus:outline-none"
        }
      >
        + Current Day
      </button>
    </div>
  );
}
