"use client";
import { useState, useEffect } from "react";
import { useConfigureSotre, useDayStore } from "@/app/store/store";
import { v4 as uuidv4 } from "uuid";
import ItemInfo from "./configurefood/ItemInfo";
import AddAllDays from "./configurefood/AddAllDays";
import AddCurrentDay from "./configurefood/AddCurrentDay";

export function ConfigureFood() {
  const { day } = useDayStore((state) => ({
    day: state.day,
  }));

  const { hello } = useConfigureSotre((state) => ({
    hello: state.configure,
  }));

  useEffect(() => {
    updateMacros();
  }, [hello]);

  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [prot, setProt] = useState(0);
  const [label, setLabel] = useState();
  const [id, setId] = useState("");

  const handleQuantity = (e) => {
    setQuantity(e);
  };

  const updateMacros = () => {
    setKcal(
      Math.trunc((hello.result.food.nutrients.ENERC_KCAL / 100) * quantity)
    );

    setCarb(Math.trunc((hello.result.food.nutrients.CHOCDF / 100) * quantity));
    setFat(Math.trunc((hello.result.food.nutrients.FAT / 100) * quantity));
    setProt(Math.trunc((hello.result.food.nutrients.PROCNT / 100) * quantity));

    setLabel(hello.result.food.label);
    setPrice(price * 1);
    setId(uuidv4);
  };

  const handlePrice = (e) => {
    setPrice(e);
  };

  const postCalcObject = {
    quantity: quantity,
    price: price,
    kcal: kcal,
    carb: carb,
    fat: fat,
    prot: prot,
    label: label,
    id: id,
    day: day,
  };
  console.log(postCalcObject.label);

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-3">Configure Food</h3>
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-300 bg-gray-100 rounded-lg overflow-hidden max-h-80 overflow-y-auto">
        <ul>
          <li className="bg-gray-100">
            <div>
              <div className="px-1 py-2">
                <h3 className="text-xs font-semibold text-gray-500">
                  Adjust Weight <span>(Grams)</span>
                </h3>
                <div className="flex mb-2">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    required
                    onChange={(e) => handleQuantity(e.target.valueAsNumber)}
                    className="mt-1 pl-1 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full shadow-sm sm:text-sm rounded-md"
                  />
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1 px-2 mr-2 mt-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => updateMacros()}
                  >
                    Recalculate
                  </button>
                </div>
                <ItemInfo
                  hello={hello}
                  kcal={kcal}
                  carb={carb}
                  fat={fat}
                  prot={prot}
                  quantity={quantity}
                />
              </div>

              <div className="px-1 mb-2">
                <h3 className="text-xs font-semibold text-gray-500">
                  Price <span>(GBP)</span>
                </h3>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  required
                  onChange={(e) => handlePrice(e.target.valueAsNumber)}
                  className="mt-1 pl-1 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="bg-gray-100 flex justify-end mt-2 mb-2">
                <AddCurrentDay postCalcObject={postCalcObject} hello={hello} />
                <div className="">
                  <AddAllDays postCalcObject={postCalcObject} hello={hello} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function UpdateMacros() {}
