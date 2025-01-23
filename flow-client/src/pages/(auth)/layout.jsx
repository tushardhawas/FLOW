import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation } from "react-router-dom";

const AUTH_ROUTES = {
  SIGNUP: "/auth/signup",
  SIGNIN: "/auth/signin",
};

const AuthLayout = () => {
  const location = useLocation(); // Get the current location (URL path)

  const isSignUpPage = location.pathname === AUTH_ROUTES.SIGNUP;

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4 bg-white">
        <nav className="flex justify-between items-center">
          <img src="/Logo.svg" height={50} width={100} alt="icon" />
          <Link to={isSignUpPage ? AUTH_ROUTES.SIGNIN : AUTH_ROUTES.SIGNUP}>
            <Button variant="secondary">
              {isSignUpPage ? "Sign In" : "Sign Up"}
            </Button>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          <Outlet /> {/* This will render the nested components (SignUp or SignIn) */}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
