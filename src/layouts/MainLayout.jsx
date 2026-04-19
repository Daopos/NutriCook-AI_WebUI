import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Mainlayout;
