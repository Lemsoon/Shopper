import { MainContext } from "@/context/ShoppingContext";
import { useContext } from "react";

export const AddItems = () => {
  const { currentList } = useContext(MainContext);
  return <>{currentList}</>;
};
