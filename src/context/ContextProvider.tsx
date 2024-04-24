import { ReactNode, useState } from "react";
import { ListContext } from "./ListContext";
import { MainContext } from "./ShoppingContext";

type contextProp = {
  children: ReactNode;
};

export const ShoppingContext = ({ children }: contextProp) => {
  const [startPage, setStartPage] = useState(true);
  const [shoppingListList, setShoppingListList] = useState<string[]>([]);
  const [currentList, setCurrentList] = useState<string>("");

  return (
    // <ListContext.Provider value={{}}>
    <MainContext.Provider
      value={{
        startPage,
        setStartPage,
        shoppingListList,
        setShoppingListList,
        currentList,
        setCurrentList,
      }}
    >
      {children}
    </MainContext.Provider>
    // </ListContext.Provider>
  );
};
