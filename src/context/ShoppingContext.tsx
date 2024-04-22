import { ReactNode, createContext, useState } from "react";

type contextProp = {
  children: ReactNode;
};

export const MainContext = createContext<{
  startPage: boolean;
  setStartPage: (value: boolean) => void;
  shoppingListList: string[];
  setShoppingListList: (list: string[]) => void;
  currentList: string;
  setCurrentList: (listName: string) => void;
}>({
  startPage: true,
  setStartPage: () => {},
  shoppingListList: [],
  setShoppingListList: () => {},
  currentList: "",
  setCurrentList: () => {},
});

export const ShoppingContext = ({ children }: contextProp) => {
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
