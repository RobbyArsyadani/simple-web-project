import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Second from "./second.tsx";
import Third from "./third.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/case2",
    element: <Second />,
  },
  {
    path: "/case3",
    element: <Third />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
