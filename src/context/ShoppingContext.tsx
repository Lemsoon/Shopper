import { createContext } from "react";

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
