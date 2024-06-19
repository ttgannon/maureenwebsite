import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.tsx";
import { Shop } from "./Components/Shop.tsx";
import Custom from "./Components/Custom.tsx";
import Exhibitions from "./Components/Exhibitions.tsx";
import Statement from "./Components/Statement.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/custom",
        element: <Custom />,
      },
      {
        path: "/exhibitions",
        element: <Exhibitions />,
      },
      {
        path: "/statement",
        element: <Statement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
