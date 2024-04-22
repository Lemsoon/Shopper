import { MainContext } from "@/context/ShoppingContext";
import { useContext } from "react";

export const StartpageLists = () => {
  const { shoppingListList } = useContext(MainContext);
  return (
    <ul className="flex flex-col pt-6 h-screen">
      {shoppingListList.map((listName, index) => {
        return (
          <li key={index} className="flex border-black border-solid border-2 w-screen h-14 my-2 text-white text-xl ">
            <div className="w-[80%] flex flex-col">
              <p className="pl-2">{listName}</p>
              <p id="ingredient list" className="text-xs pl-2 truncate w-80 text-gray-400">
                Meat, Corn, Cucumber, Santa maria sauce, taco bread, taco chips
              </p>
            </div>
            <p className="w-[20%] flex justify-center items-center border-l border-black border-solid border-1">
              100kr
            </p>
          </li>
        );
      })}
    </ul>
  );
};
