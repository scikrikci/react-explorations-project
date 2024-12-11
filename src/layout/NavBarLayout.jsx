import NavigationBar from "./../components/Navbar";
// import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full p-0 relative">
      <NavigationBar />
      <main className="bg-bgPrimary min-h-screen">
        <Outlet />
      </main>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
    </div>
  );
};

export default Layout;
