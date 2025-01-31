import Dashboardpage from "./Dashboardpage";
import Sidebar from "@/components/userUi/Sidebar";
import Navbar from "@/components/userUi/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>

        <div className="lg:pl-[264px] flex-1">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="h-full py-8 px-8 flex flex-col">
              <Dashboardpage />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
