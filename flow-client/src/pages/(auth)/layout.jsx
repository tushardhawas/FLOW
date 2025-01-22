import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>
      <main className="bg-neutral-100 min-h-screen ">
        <div className="mx-auto max-w-screen-2xl p-4 bg-white">
          <nav className="flex justify-between items-center">
            <img src="/Logo.svg" height={50} width={100} alt="icon" />
            <Button variant="secondary">Sign Up</Button>
          </nav>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
