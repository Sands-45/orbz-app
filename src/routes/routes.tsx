import { createBrowserRouter, Outlet } from "react-router";
import NotFound from "./not-found";
import SignIn from "@/pages/signin/page";
import Signup from "@/pages/signup/page";
import Home from "@/pages/home/page";
import MyOrbz from "@/pages/my-orbz/page";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "my-orbz",
        element: <MyOrbz />,
      },
    ],
  },
]);
