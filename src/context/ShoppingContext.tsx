import { ReactNode, createContext, useState } from "react";

type contextProp = {
  children: ReactNode;
};

export const MainContext = createContext({
  startPage: true,
  setStartPage: (value: boolean) => {},

  shoppingListList: [] as string[],
  setShoppingListList: (list: string[]) => {},
});

export const ShoppingContext = ({ children }: contextProp) => {
  const [startPage, setStartPage] = useState(true);
  const [shoppingListList, setShoppingListList] = useState<string[]>([]);

  return (
    <MainContext.Provider value={{ startPage, setStartPage, shoppingListList, setShoppingListList }}>
      {children}
    </MainContext.Provider>
  );
};
