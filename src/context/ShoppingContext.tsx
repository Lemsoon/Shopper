import { createContext } from "react";
import { Action } from "./ContextProvider";

export const MainContext = createContext<{
  startPage: boolean;
  setStartPage: (value: boolean) => void;
  shoppingListList: string[];
  setShoppingListList: (list: string[]) => void;
  currentList: string;
  setCurrentList: (listName: string) => void;
  state: initialTotalItems;
  dispatch: React.Dispatch<Action>;
}>({
  startPage: true,
  setStartPage: () => {},
  shoppingListList: [],
  setShoppingListList: () => {},
  currentList: "",
  setCurrentList: () => {},
  state: { item: [""] },
  dispatch: () => null,
});

export type totalItems = {
  item: [];
};

export type initialTotalItems = {
  item: string[];
};
