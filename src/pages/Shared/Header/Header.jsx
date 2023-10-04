import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="mt-10 mb-8 text-center">
      <img src={logo} alt="" className="mx-auto mb-5" />
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd,MMMM, D, YYYY")}</p>
    </div>
  );
};

export default Header;
