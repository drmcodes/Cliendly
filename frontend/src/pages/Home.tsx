import "../App.css";
import Dashboard from "./dashboard";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

const Home = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/Home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-(--sage)/20">
      <NavbarHome onHandleLogin={handleBackToLogin} />

      <main className="flex-grow flex justify-center items-center px-4 py-8 md:px-12">
        <div className="w-full max-w-screen-xl">
          <Dashboard />
        </div>
      </main>
    </div>
  );
};

export default Home;
