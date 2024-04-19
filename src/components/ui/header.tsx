import { useState } from "react";
import { Button } from "./button";

export const Header = () => {
  const [startPage, setStartPage] = useState<boolean>(true);

  const switchPage = (s: boolean) => setStartPage(s);

  return (
    <div className="flex justify-around w-screen pt-5 ">
      <Button
        className={`font-bold text-3xl  decoration-white ${!startPage ? "text-gray-500" : "text-white underline"}`}
        onClick={() => switchPage(true)}
      >
        Your Lists
      </Button>
      <Button
        className={`font-bold text-3xl  ${startPage ? "text-gray-500" : "text-white underline"}`}
        onClick={() => switchPage(false)}
      >
        Recent Lists
      </Button>
    </div>
  );
};
