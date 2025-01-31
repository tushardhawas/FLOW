import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"; // Import DialogTitle

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary" className=" lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <DialogTitle className="sr-only">Sidebar</DialogTitle>
        <DialogDescription className="sr-only">
          Navigation menu
        </DialogDescription>

        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
