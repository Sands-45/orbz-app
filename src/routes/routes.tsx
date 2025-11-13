import { createBrowserRouter } from "react-router";
import NotFound from "./not-found";
import Home from "@/pages/home/page";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
