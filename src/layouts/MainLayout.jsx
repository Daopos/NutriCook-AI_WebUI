import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-[#F5FAFF]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Mainlayout;
