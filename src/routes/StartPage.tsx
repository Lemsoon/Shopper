import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Header } from "@/components/header";
import { MainContext } from "@/context/ShoppingContext";
import { useContext } from "react";
import { StartpageLists } from "@/components/StartpageLists";

export const StartPage = () => {
  const { shoppingListList } = useContext(MainContext);

  return (
    <>
      <Header />

      <div className="h-screen  flex justify-center items-center">
        {shoppingListList.length > 0 ? (
          <StartpageLists />
        ) : (
          <p className="text-3xl text-white">There is nothing here yet...</p>
        )}

        <Button className="text-black bg-white fixed bottom-[10%] right-3 my-4 mr-5 rounded-full w-40 h-12 text-xl border-black border-solid border-[1px] ">
          <Link to={"create"}>Create List</Link>
        </Button>
      </div>
    </>
  );
};
