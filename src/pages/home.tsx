import { useNavigate     } from "react-router-dom";
import "../App.css";
import { googleLogout } from "@react-oauth/google";
const Home = () => {

const navigate = useNavigate()

 function handleLogout() {
    googleLogout()
    localStorage.removeItem("user")
    navigate("/login")
  }


  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <p className="text-cyan-300 text-4xl">Hello</p>
        <button className="btn bg-amber-600" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Home;
