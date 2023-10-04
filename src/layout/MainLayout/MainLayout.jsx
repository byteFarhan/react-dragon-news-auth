import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-5 mx-auto max-w-[1400px] md:px-10 font-poppins">
      <Outlet />
    </div>
  );
};

export default MainLayout;
