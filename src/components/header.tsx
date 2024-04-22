import { useContext, useState } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { MainContext } from "@/context/ShoppingContext";

export const Header = () => {
  const { startPage, setStartPage } = useContext(MainContext);

  const switchPage = (s: boolean) => setStartPage(s);

  return (
    <div className="flex justify-around w-screen pt-5 ">
      <Button
        className={`font-bold text-3xl  decoration-white ${!startPage ? "text-gray-500" : "text-white underline"}`}
        onClick={() => switchPage(true)}
      >
        <Link to={"/"}>Your Lists</Link>
      </Button>
      <Button
        className={`font-bold text-3xl  ${startPage ? "text-gray-500" : "text-white underline"}`}
        onClick={() => switchPage(false)}
      >
        <Link to={"/recent"}>Recent Lists</Link>
      </Button>
    </div>
  );
};
