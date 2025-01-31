import React from "react";
import Navigation from "./Navigation";
import { Separator } from "../ui/separator";
const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <a>
        <img src="/Logo.svg" alt="logo" width={110} height={48} />
      </a>
      <Separator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
