import Navbar from "../components/Navbar";
import BackgroundVideo from "../components/BackgroundVideo";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <BackgroundVideo />
      <Navbar onHandleLogin={() => {}} />
    </div>
  );
};

export default Home;