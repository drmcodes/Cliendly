import { useNavigate } from "react-router-dom";
import "../App.css";
import { googleLogout } from "@react-oauth/google";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();
    localStorage.removeItem("user");
    navigate("/login");
  }

  const menuItems = [
    "Inicio",
    "Clientes",
    "Membresías",
    "Asistencias",
    "Clases",
    "Pagos",
    "Instructores",
    "Mensajes",
    "Configuración",
  ];

  return (
    <div className="flex min-h-[90%]">
      <div className="rounder-2xl"></div>
      <aside className="w-[15%] bg-(--brunswick-green) text-white p-4 flex flex-col gap-4 rounded-bl-2xl rounded-l-2xl">
        <h2 className="text-2xl font-extrabold text-center">Dashboard</h2>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="text-left px-4 py-2 hover:bg-(--sage)/20 rounded-md transition"
          >
            {item}
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all"
        >
          Cerrar sesión
        </button>
      </aside>

      <main className="w-[85%] bg-(--timberwolf) p-8 overflow-y-auto rounded-br-2xl rounded-r-2xl">
        <h1 className="text-3xl  font-bold text-gray-800 mb-6">Inicio</h1>

        <div className="bg-white rounded-2xl p-6 shadow-lg min-h-[90%]">
          <p className="text-gray-700">
            Contenido de la sección actual.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
