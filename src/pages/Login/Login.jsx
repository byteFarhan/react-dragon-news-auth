import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
// import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { UserLogin, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(userRegistation);
  // const email = e.target.email.value;
  // const password = e.target.password.value;
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // const name = e.target.name.value;
    // const photoURL = e.target.photoUrl.value;

    const email = e.target.email.value;
    const password = e.target.password.value;

    // const isAccept = e.target.terms.checked;
    // console.log(name, email, password, isAccept, photoURL);
    // if (!/\.(jpg|jpeg|png|gif)$/i.test(photoURL)) {
    //   setError("Please enter a valid img URL!");
    //   return;
    // } else if (password.length < 6) {
    //   setError("Password must be longer then 6 char!");
    //   return;
    // } else if (!isAccept) {
    //   setError("Please accept our terms & conditions!");
    //   return;
    // }
    UserLogin(email, password)
      .then((result) => {
        console.log(result.user);
        // updateProfile(result.user, { displayName: name, photoURL: photoURL })
        //   .then(() => {
        //     console.log("profile Updated");
        //   })
        //   .catch((error) => {
        //     console.log(error.message);
        //   });
        e.target.reset();
        setSuccess("Login successfull.");
        navigate("/");
      })
      .catch((error) => {
        // console.error(error.message);
        setError(error.message);
      });
  };
  const handleResetPassword = (e) => {
    const target = e.target;
    const email = e.target?.email?.value;
    console.log(target);
    console.log(email);
    if (!email) {
      setError("please enter a valid email address!");
      return;
    }
    resetPassword(email)
      .then(() => {
        alert("Pleace check your gmail to set new password.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="py-6 lg:bg-[#F3F3F3]">
      <div className="max-w-[1400px] mx-auto">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[87vh] hero ">
        <div className=" w-full max-w-[500px] md:px-6 card rounded lg:bg-base-100 bg-[#F3F3F3]">
          <h3 className="text-[#403F3F] text-3xl font-semibold text-center pt-10">
            Login your account
          </h3>
          <hr className="w-5/6 mx-auto mt-10" />
          <form onSubmit={handleLogin} className="card-body">
            {/* <div className=" form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="rounded input-bordered input lg:bg-[#F3F3F3]"
                required
              />
            </div> */}
            {/* <div className=" form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="rounded input-bordered input lg:bg-[#F3F3F3]"
                // required
              />
            </div> */}
            <div className=" form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="rounded input-bordered input lg:bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input rounded input-bordered w-full lg:bg-[#F3F3F3]"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-3"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>
            {success && <p className="text-sm text-gray-700">{success}</p>}
            {error && <p className="text-sm text-red-700">{error}</p>}
            <div className="flex justify-between w-full gap-24 mt-2">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="RememberMe">Remember me</label>
              </div>
              <p
                onClick={handleResetPassword}
                className="text-blue-600 transition-transform delay-1000 hover:underline"
              >
                Forget password?
              </p>
            </div>

            <div className="mt-2 form-control">
              <button className="text-white btn bg-[#403F3F] hover:bg-[#403F4F]">
                Login
              </button>
            </div>
            <p className="my-3 text-center">
              {`Don't have any account? `}
              <Link to={"/register"} className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
