import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./routes/Root.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./routes/ErrorPage.tsx";
import { CreateList } from "./routes/CreateList.tsx";
import { StartPage } from "./routes/StartPage.tsx";
import { RecentLists } from "./routes/RecentLists.tsx";
import { AddItems } from "./routes/AddItems.tsx";
import { ShoppingContext } from "./context/ContextProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/create",
        element: <CreateList />,
      },
      {
        path: "/recent",
        element: <RecentLists />,
      },
      {
        path: "/add_items",
        element: <AddItems />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingContext>
      <RouterProvider router={router} />
    </ShoppingContext>
  </React.StrictMode>
);
