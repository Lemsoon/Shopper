import { useContext } from "react";
import { MainContext } from "@/context/ShoppingContext";

export const ItemList = () => {
  const { userList } = useContext(MainContext);

  return (
    <>
      <ul>
        {userList.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
