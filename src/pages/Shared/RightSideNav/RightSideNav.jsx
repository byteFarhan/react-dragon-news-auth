import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div className="space-y-8 md:mx-auto md:w-3/4 lg:w-full">
      <div className="space-y-2">
        <h1 className="my-5 text-3xl font-semibold ">Login with</h1>
        <button className="flex items-center justify-center w-full gap-2 py-2 text-xl font-medium text-center text-blue-500 border-2 border-blue-500 rounded-lg">
          <FaGoogle className="text-2xl font-semibold" />
          Login with Google
        </button>
        <button className="flex items-center justify-center w-full gap-2 py-2 text-xl font-medium text-center text-gray-700 border-2 border-gray-700 rounded-lg">
          <FaGithub className="text-2xl font-semibold" />
          Login with Github
        </button>
      </div>
      <div>
        <h1 className="mb-5 text-3xl font-semibold">Find Us On</h1>
        <div className="">
          <a
            href="#"
            className=" 
             flex items-center py-3 px-5  gap-2 text-lg text-[#706F6F] rounded-t-lg font-medium border border-gray-300"
          >
            <span className="p-3 text-xl text-[#4267B2] bg-gray-100 rounded-full">
              <FaFacebookF />
            </span>
            Facebook
          </a>
          <a
            href="#"
            className="
             flex items-center gap-2 text-lg py-3 px-5 text-[#706F6F] font-medium border-x border-gray-300"
          >
            <span className="text-[#1DA1F2] text-xl p-3 rounded-full bg-gray-100">
              <FaTwitter />
            </span>
            Twitter
          </a>

          <a
            href="#"
            className="ml8
             flex items-center gap-2 text-lg py-3 px-5 text-[#706F6F] rounded-b-lg font-medium border border-gray-300"
          >
            <span className="text-[#F56040] bg-gray-100 rounded-full text-xl p-3">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      <div className="px-3 py-5 bg-[#F3F3F3] rounded-sm">
        <h1 className="mb-5 text-3xl font-semibold">Q-Zone</h1>
        <img src={qZone1} alt="" className="object-cover w-full mb-3" />
        <img src={qZone2} alt="" className="object-cover w-full mb-3" />
        <img src={qZone3} alt="" className="object-cover w-full mb-3" />
      </div>
    </div>
  );
};

export default RightSideNav;
