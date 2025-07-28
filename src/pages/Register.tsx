import { FaUser, FaGlobe, FaMoon } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-1"
      >
        <source src="/src\assets\bg-cliendly.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
      <nav className="w-full bg-(--sage)/50  text-white flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">Cliendly</div>

        <div className="flex gap-4 text-xl">
          <FaUser className="cursor-pointer hover:text-sage" />
          <FaGlobe className="cursor-pointer hover:text-sage" />
          <FaMoon className="cursor-pointer hover:text-sage" />
        </div>
      </nav>

      <div className="min-h-screen bg-(--sage)/50 flex justify-center items-center">
       
          <fieldset className="fieldset bg-(--brunswick-green) border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
            <img
              src="../src/assets/Cliendly-w.png"
              alt="Logo_Cliendly"
              className="p-4"
            />

            <label className="label text-(--timberwolf)">Nombre</label>
            <input type="email" className="input" placeholder="Nombre" />

            <label className="label text-(--timberwolf)">Correo</label>
            <input type="email" className="input" placeholder="Correo" />

            <label className="label text-(--timberwolf)">Contraseña</label>
            <input type="password" className="input" placeholder="Contraseña" />
            
            <p className="text-(--timberwolf) font-bold ">
              ¿Ya tienes cuenta?{" "}
              <a
                onClick={() => {navigate("/Login")}}
                className="link text-(--timberwolf) hover:text-(--timberwolf)/120 font-bold"
              >
                Accede ahora
              </a>
            </p>
            <button className="btn btn-neutral bg-(--sage) hover:bg-(--hunter-green) text-white mt-4">
              Entrar
            </button>
          </fieldset>
        </div>
      
    </>
  );
};
export default Login;
