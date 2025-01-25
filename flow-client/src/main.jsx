// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
   
    <AppRouter />
  </QueryClientProvider>
);
