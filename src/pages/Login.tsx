import "../App.css";
import { useState } from "react";
import Recovery from "../components/Recovery";
import Register from "../components/Register";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import BackgroundVideo from "../components/BackgroundVideo";

const Main = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRecovering, setIsRecovering] = useState(false);

  const handleBackToLogin = () => {
    setIsLoggingIn(true);
    setIsRegistering(false);
    setIsRecovering(false);
  };

  const handleRegister = () => {
    setIsLoggingIn(false);
    setIsRegistering(true);
    setIsRecovering(false);
  };

  const handlePasswordRecovery = () => {
    setIsLoggingIn(false);
    setIsRegistering(false);
    setIsRecovering(true);
  };

  return (
    <>
      <BackgroundVideo />

      <Navbar onHandleLogin={handleBackToLogin} />

      {isLoggingIn && !isRecovering && !isRegistering && (
        <Login
          onHandleRegister={handleRegister}
          onHandleRecovery={handlePasswordRecovery}
        />
      )}
      {isRegistering && !isLoggingIn && !isRecovering && (
        <Register onBackToLogin={handleBackToLogin} />
      )}
      {isRecovering && !isRegistering && !isLoggingIn && (
        <Recovery onBackToLogin={handleBackToLogin} />
      )}
    </>
  );
};

export default Main;
