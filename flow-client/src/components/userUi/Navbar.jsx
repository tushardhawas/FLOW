import UserButton from "./user-Button";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>

        <div className="flex-col hidden lg:flex">
          <h1 className="text-2xl font-semibold">Home</h1>
          <p className="text-muted-foreground">
            Monitor all of your projects and tasks
          </p>
        </div>
      </div>

      <UserButton />
    </nav>
  );
};

export default Navbar;
