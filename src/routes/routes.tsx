import { createBrowserRouter } from "react-router";
import NotFound from "./not-found";
import SignIn from "@/pages/signin/page";
import Signup from "@/pages/signup/page";
import Home from "@/pages/home/page";
import MyOrbz from "@/pages/my-orbz/page";
import MainShell from "@/layouts/shell/main-shell";
import ErrorBoundary from "@/error-boundary";

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
    element: <MainShell />,
    errorElement: <ErrorBoundary />,
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
