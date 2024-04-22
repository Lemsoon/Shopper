import { ReactNode, createContext, useState } from "react";

type contextProp = {
  children: ReactNode;
};

export const MainContext = createContext({
  startPage: true,
  setStartPage: (value: boolean) => {},
});

export const ShoppingContext = ({ children }: contextProp) => {
  const [startPage, setStartPage] = useState(true);

  return <MainContext.Provider value={{ startPage, setStartPage }}>{children}</MainContext.Provider>;
};
