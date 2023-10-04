import Header from "../Shared/Header/Header";
import LaftSideNav from "../Shared/LaftSideNav/LaftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div>
          <LaftSideNav />
        </div>
        <div className="lg:col-span-2">
          <h1>News comming soon</h1>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
