import { useRef, MutableRefObject, useContext, useState } from "react";
import { Input } from "./Input";
import { Button } from "./button";
import { BsCheck2 } from "react-icons/bs";
import { MainContext } from "@/context/ShoppingContext";
import { ACTION } from "@/context/ContextProvider";

export const AddItemWindow = () => {
  const listItemRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const { state, dispatch } = useContext(MainContext);

  const addToList = async () => {
    console.log("Adding", listItemRef.current!.value, "to the item list");

    const newItem = listItemRef.current!.value;
    dispatch({
      type: ACTION.ADD,
      payload: newItem,
    });
  };

  return (
    <div className="w-screen h-screen items-center flex  justify-center">
      {state.item.length > 1 ? (
        state.item.map((item, i) => {
          return <div key={i}>{item}</div>;
        })
      ) : (
        <div className="flex flex-col">
          <Input
            className="w-80 h-14 bg-black bg-opacity-25 border-none text-xl text-white rounded-none"
            placeholder="What item do you want to add?"
            ref={listItemRef}
          />
          <div className="flex">
            <div className="w-1/2 h-14 bg-black bg-opacity-25 border border-solid border-black">
              <Button className=" w-[100%] h-[100%] bg-black bg-opacity-25 rounded-none">
                <p className="text-4xl text-red-500">✕</p>
              </Button>
            </div>
            <div className="w-1/2 h-14 bg-black bg-opacity-25 border border-solid border-black">
              <Button className=" w-[100%] h-[100%] bg-black bg-opacity-25 rounded-none" onClick={() => addToList()}>
                <BsCheck2 className="text-5xl text-green-500" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
