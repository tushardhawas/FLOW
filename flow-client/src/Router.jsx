// src/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AuthLayout from "./pages/(auth)/layout";
import Signoutpage from "./pages/(auth)/signout";
import SignInPage from "./pages/(auth)/signin";
import Dashboardlayout from "./pages/(dashboard)/Dashboardlayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboardlayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />, 
    children: [
      {
        path: "signin", // Matches /signin/login
        element: <SignInPage />, // Renders Login component
      },
      {
        path: "signup", // Matches /signin/register
        element: <Signoutpage />, // Renders Register component
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
