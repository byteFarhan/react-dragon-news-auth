import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-5 mb-5 rounded">
      <button className="text-white rounded mr-3 font-semibold py-3 px-5 transition-all delay-100 hover:bg-[#D72066] bg-[#D72050]">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100} className="text-lg font-medium ">
        <Link className="mr-12">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link className="mr-12">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link className="mr-12">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
