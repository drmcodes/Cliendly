import { FaUser, FaGlobe, FaMoon } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [isLogginIn, setIsLogginIn] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  const [isRecovering, setIsRecovering] = useState(false)


  const handleRegister = () => {
    setIsRegistering(true);
    setIsLogginIn(false);
  };

  const handlePasswordRecovery = () => {
    setIsLogginIn(!true)
    setIsRecovering(true)
    
  }
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
        {isLogginIn ? (
          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 px-4">
            <fieldset className="fieldset bg-(--brunswick-green) border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
              <img
                src="../src/assets/Cliendly-w.png"
                alt="Logo_Cliendly"
                className="p-4"
              />

              <label className="label text-sm text-(--timberwolf)">Correo</label>
              <input type="email" className="input" placeholder="Correo" />

              <label className="label text-sm text-(--timberwolf)">Contraseña</label>
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
              />
              <a onClick={handlePasswordRecovery} className="link text-sm text-(--timberwolf) hover:text-white font-bold">
                He olvidado mi contraseña
              </a>
              <p className="text-sm text-(--timberwolf) font-bold ">
                ¿Aún no tienes cuenta?{" "}
                <a
                  onClick={handleRegister}
                  className="link text-sm text-(--timberwolf) hover:text-white font-bold"
                >
                  Regístrate aquí
                </a>
              </p>
              <button className="btn text-sm btn-neutral bg-(--sage) hover:bg-(--hunter-green) transition-transform duration-300 hover:scale-110 text-white mt-4">
                Entrar
              </button>
            </fieldset>
            <div className="divider  lg:flex-row  lg:divider-horizontal">O</div>
            <fieldset className="fieldset flex flex-col justify-center  items-center bg-(--brunswick-green)/90 border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
              <div
                className="px-6 sm:px-0 max-w-sm rounded-2lg"
                style={{ colorScheme: "light" }}
              >
                <GoogleLogin
                  shape="circle"
                  theme="filled_blue"
                  size="medium"
                  logo_alignment="center"
                  ux_mode="popup"
                  useOneTap={true}
                  onSuccess={(credentialResponse) => {
                    console.log("Login succesful");

                    if (credentialResponse.credential) {
                      const decoded = jwtDecode(credentialResponse.credential);
                      console.log(decoded);
                    } else {
                      console.error("No se recibió el token");
                    }

                    navigate("/home");
                  }}
                  auto_select={true}
                />
              </div>
            </fieldset>
          </div>
        ) : (
          <div className="min-h-screen  flex justify-center items-center">
            <fieldset className="fieldset bg-(--brunswick-green) border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
              <img
                src="../src/assets/Cliendly-w.png"
                alt="Logo_Cliendly"
                className="p-4"
              />

              <label className="label text-sm text-(--timberwolf)">Nombre</label>
              <input type="email" className="input" placeholder="Nombre" />

              <label className="label text-sm text-(--timberwolf)">Correo</label>
              <input type="email" className="input" placeholder="Correo" />

              <label className="label text-sm text-(--timberwolf)">Contraseña</label>
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
              />

              <p className="text-(--timberwolf) font-bold text-sm ">
                ¿Ya tienes cuenta?{" "}
                <a
                  onClick={() => {
                   setIsLogginIn(true)
                   setIsRegistering(false)
                  }}
                  className="link text-sm text-(--timberwolf) hover:text-white font-bold"
                >
                  Accede ahora
                </a>
              </p>
              <button className="btn text-sm btn-neutral bg-(--sage) hover:bg-(--hunter-green) transition-transform duration-300 hover:scale-110 text-white mt-4">
                Entrar
              </button>
            </fieldset>
          </div>
        )}
      </div>
    </>
  );
};
export default Login;
