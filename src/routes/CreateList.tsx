import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/Input";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { MainContext } from "@/context/ShoppingContext";

export const CreateList = () => {
  const { shoppingListList, setShoppingListList } = useContext(MainContext);

  const listNameInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const createNewList = (name: string) => {
    setShoppingListList([...shoppingListList, name]);
  };

  useEffect(() => {
    console.log(shoppingListList);
  }, [shoppingListList]);

  return (
    <div className="h-screen flex flex-col">
      <header className="p-3 flex justify-between">
        <Link to={"/"}>
          <MdArrowBackIosNew className="h-8 w-8 text-white" />
        </Link>
        <p className="border-red-100 border-solid border-1  text-center text-white text-2xl">Creating a new list</p>
        <div className="h-8 w-8"></div>
      </header>
      <div className="w-screen h-[100%] flex justify-center items-center flex-col ">
        <p className="text-white font-semibold text-2xl mb-4">Give your new list a name!</p>
        <Input
          ref={listNameInputRef}
          type="text"
          placeholder="New list name"
          maxLength={50}
          className="w-80 h-14 bg-black bg-opacity-25 border-none text-xl text-white rounded-none"
        />
      </div>
      <div className="fixed bottom-[10%] w-screen flex justify-center">
        <Button
          className="text-black bg-white bottom-24 rounded-full w-40 h-12 text-xl border-black border-solid border-[1px]"
          onClick={() => {
            if (listNameInputRef.current && listNameInputRef.current.value.length > 2)
              createNewList(listNameInputRef.current.value);
            else {
              console.log("List name needs minimum 3 characters");
            }
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};
