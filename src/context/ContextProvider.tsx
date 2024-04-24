import { ReactNode, useState } from "react";
import { MainContext } from "./ShoppingContext";

type ContextProps = {
  children: ReactNode;
};

export const ShoppingContext = ({ children }: ContextProps) => {
  const [startPage, setStartPage] = useState(true);
  const [shoppingListList, setShoppingListList] = useState<string[]>([]);
  const [currentList, setCurrentList] = useState<string>("");

  return (
    <MainContext.Provider
      value={{ startPage, setStartPage, shoppingListList, setShoppingListList, currentList, setCurrentList }}
    >
      {children}
    </MainContext.Provider>
  );
};
