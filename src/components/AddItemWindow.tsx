import { useState, useRef, MutableRefObject, useContext } from "react";
import { Input } from "./Input";
import { Button } from "./button";
import { BsCheck2 } from "react-icons/bs";

type newItemType = {
  itemName: string;
};

export const AddItemWindow = () => {
  const [addItem, setAddItem] = useState<newItemType>({ itemName: "" });
  const listItemRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const addToLocalList = () => {
    const jsonData = JSON.stringify(listItemRef.current?.value);

    const existingItemsString = localStorage.getItem("userItemList");
    let existingItems: any[] = [];

    if (existingItemsString) {
      existingItems = JSON.parse(existingItemsString);
    }

    existingItems.push(jsonData);

    localStorage.setItem("userItemList", JSON.stringify(existingItems));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
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
            <Button className=" w-[100%] h-[100%] bg-black bg-opacity-25 rounded-none" onClick={() => addToLocalList()}>
              <BsCheck2 className="text-5xl text-green-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
