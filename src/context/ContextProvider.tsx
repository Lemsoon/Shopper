import { ReactNode, useEffect, useReducer, useState } from "react";
import { MainContext, initialTotalItems } from "./ShoppingContext";

type ContextProps = {
  children: ReactNode;
};

export const ACTION = {
  REMOVE: "remove",
  ADD: "add",
};

export type Action = {
  type: string;
  payload: string;
};

export const ShoppingContext = ({ children }: ContextProps) => {
  const [startPage, setStartPage] = useState(true);
  const [shoppingListList, setShoppingListList] = useState<string[]>([]);
  const [currentList, setCurrentList] = useState<string>("");

  const initialTotalItemState: initialTotalItems = {
    item: [""],
  };

  const reducer = (state: initialTotalItems, action: Action): initialTotalItems => {
    switch (action.type) {
      case ACTION.ADD:
        return {
          ...state,
          item: [...state.item, action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialTotalItemState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <MainContext.Provider
      value={{
        startPage,
        setStartPage,
        shoppingListList,
        setShoppingListList,
        currentList,
        setCurrentList,
        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
