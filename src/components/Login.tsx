import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = ({ onHandleRecovery, onHandleRegister }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-(--sage)/50 flex justify-center items-start lg:items-center pt-6 lg:pt-0">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 px-4">
        <fieldset className="fieldset bg-(--brunswick-green) border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
          <img
            src="../src/assets/Cliendly-w.png"
            alt="Logo_Cliendly"
            className="p-4"
          />

          <label className="label text-sm text-(--timberwolf)">Correo</label>
          <input type="email" className="input" placeholder="Correo" />

          <label className="label text-sm text-(--timberwolf)">
            Contraseña
          </label>
          <input type="password" className="input" placeholder="Contraseña" />

          <a
            onClick={onHandleRecovery}
            className="link text-sm text-(--timberwolf) hover:text-white font-bold cursor-pointer"
          >
            He olvidado mi contraseña
          </a>

          <p className="text-sm text-(--timberwolf) font-bold">
            ¿Aún no tienes cuenta?{" "}
            <a
              onClick={onHandleRegister}
              className="link text-sm text-(--timberwolf) hover:text-white font-bold cursor-pointer"
            >
              Regístrate aquí
            </a>
          </p>

          <button className="btn text-sm btn-neutral bg-(--sage) hover:bg-(--hunter-green) transition-transform duration-300 hover:scale-110 text-white mt-4">
            Entrar
          </button>
        </fieldset>

        <div className="divider my-2 lg:my-0 lg:flex-row lg:divider-horizontal">
          O
        </div>

        <fieldset className="fieldset flex flex-col justify-center items-center bg-(--brunswick-green)/90 border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
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
                if (credentialResponse.credential) {
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log(decoded);
                  navigate("/home");
                } else {
                  console.error("No se recibió el token");
                }
              }}
              auto_select={true}
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
