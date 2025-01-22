// src/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthLayout from "./pages/(auth)/layout";
import Signoutpage from "./pages/(auth)/signout/index.js";
import SignInPage from "./pages/(auth)/signin/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "signout", // Matches /signin/register
        element: <Signoutpage />, // Renders Register component
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
