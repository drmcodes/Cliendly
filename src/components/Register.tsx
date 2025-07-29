const Register = ({ onBackToLogin }) => {
  return (
    <div className="min-h-screen bg-(--sage)/50 flex justify-center items-start lg:items-center pt-6 lg:pt-0">
      <fieldset className="fieldset bg-(--brunswick-green) border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
        <img
          src="../src/assets/Cliendly-w.png"
          alt="Logo_Cliendly"
          className="p-4"
        />

        <label className="label text-sm text-(--timberwolf)">Nombre</label>
        <input type="text" className="input" placeholder="Nombre" />

        <label className="label text-sm text-(--timberwolf)">Correo</label>
        <input type="email" className="input" placeholder="Correo" />

        <label className="label text-sm text-(--timberwolf)">Contraseña</label>
        <input type="password" className="input" placeholder="Contraseña" />

        <p className="text-(--timberwolf) font-bold text-sm">
          ¿Ya tienes cuenta?{" "}
          <a
            onClick={onBackToLogin}
            className="link text-sm text-(--timberwolf) hover:text-white font-bold cursor-pointer"
          >
            Accede ahora
          </a>
        </p>

        <button className="btn text-sm btn-neutral bg-(--sage) hover:bg-(--hunter-green) transition-transform duration-300 hover:scale-110 text-white mt-4">
          Registrarse
        </button>
      </fieldset>
    </div>
  );
};

export default Register;
