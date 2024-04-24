import { createContext } from "react";

export const ListContext = createContext<{
  listName: string;
  listId: string;
  listItemCount: number;
  listItems: [];
}>({
  listName: "New list",
  listId: "0",
  listItemCount: 0,
  listItems: [],
});

export type baseList = {
  listName: string;
  listId: string;
  listItemCount: number;
  listItems: {
    itemId: string;
    itemName: string;
  };
};

export const initialList: baseList = {
  listName: "New list",
  listId: "0",
  listItemCount: 0,
  listItems: {
    itemId: "0",
    itemName: "name",
  },
};
