const Recovery = ({ onBackToLogin }) => {
  return (
    <div className="min-h-screen bg-(--sage)/50 flex justify-center items-start lg:items-center pt-6 lg:pt-0">
      <fieldset className="fieldset bg-(--brunswick-green) border-base-300 rounded-box w-xs border-2 p-6 shadow-lg">
        <img
          src="../src/assets/Cliendly-w.png"
          alt="Logo_Cliendly"
          className="p-4"
        />

        <label className="label text-sm text-(--timberwolf)">Correo</label>
        <input type="email" className="input" placeholder="Correo" />

        <p className="text-(--timberwolf) font-bold text-sm">
          ¿Ya la recuperaste?{" "}
          <a
            onClick={onBackToLogin}
            className="link text-sm text-(--timberwolf) hover:text-white font-bold cursor-pointer"
          >
            Volver al login
          </a>
        </p>

        <button className="btn text-sm btn-neutral bg-(--sage) hover:bg-(--hunter-green) transition-transform duration-300 hover:scale-110 text-white mt-4">
          Recuperar contraseña
        </button>
      </fieldset>
    </div>
  );
};

export default Recovery;
