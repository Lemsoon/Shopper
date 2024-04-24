import { AddItemWindow } from "@/components/AddItemWindow";
import { BackButtonheader } from "@/components/BackButtonHeader";
import { Button } from "@/components/button";
import { MainContext } from "@/context/ShoppingContext";
import { useContext, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";

export const AddItems = () => {
  const { currentList } = useContext(MainContext);
  const [addingItem, setAddingItem] = useState<boolean>(false);

  return (
    <div className=" h-[92%]">
      <BackButtonheader navTo="/create">
        <h1 className="text-3xl py-0 leading-6 underline">{currentList}</h1>
      </BackButtonheader>
      {addingItem ? (
        <AddItemWindow />
      ) : (
        <>
          <div
            id="added-item-container"
            className="w-screen h-[85.6vh] border-2 border-solid border-white rounded-xl flex justify-center items-center text-white text-xl font-semibold"
          >
            <div>Your list is empty, add something!</div>
          </div>
          <Button
            className="text-black bg-white fixed bottom-[10%] right-3 my-4 mr-5 rounded-full w-24 h-24 text-7xl border-black border-solid border-[1px] flex items-center justify-center"
            onClick={() => {
              setAddingItem(true);
            }}
          >
            <MdOutlineAdd />
          </Button>
        </>
      )}
    </div>
  );
};
