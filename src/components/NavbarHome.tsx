import { FaUser, FaGlobe, FaMoon, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

const NavbarHome = ({ onHandleLogin }) => {
  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav className="w-full bg-(--sage)/50 text-white flex items-center justify-between px-6 py-4">
      <Link to="/home" onClick={onHandleLogin}>
        <div className="text-xl hover:scale-110 font-bold">Cliendly</div>
      </Link>
      <div className="flex gap-4 text-xl">
        <FaUser className="cursor-pointer hover:scale-110 hover:text-sage" />
        <FaGlobe className="cursor-pointer hover:scale-110 hover:text-sage" />
        <FaMoon className="cursor-pointer hover:scale-110 hover:text-sage" />
        <FaPowerOff
          onClick={handleLogout}
          className="cursor-pointer hover:scale-110 hover:text-sage"
        />
      </div>
    </nav>
  );
};

export default NavbarHome;
