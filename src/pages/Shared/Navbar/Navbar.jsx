import { Link, NavLink } from "react-router-dom";
import defaultProfilePic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  const { user } = useContext(AuthContext);
  // console.log(user.photoURL);
  return (
    <div className="navbar">
      {/* <div className="navbar bg-base-100"> */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu space-x-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 space-x-3 menu menu-horizontal">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img
          src={user?.photoURL ? user?.photoURL : defaultProfilePic}
          alt=""
          className={`object-cover w-12 h-12 mr-3 ${
            user?.photoURL && "border-2 border-gray-800"
          }  rounded-full`}
        />
        <Link to="/login">
          <button className="btn text-white font-bold hover:bg-[#403F3F] bg-[#403F3F]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
