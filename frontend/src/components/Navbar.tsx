import { FaUser, FaGlobe, FaMoon, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = ({ onHandleLogin }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <nav className="w-full bg-white/5 backdrop-blur-xl text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" onClick={onHandleLogin}>
            <div className="text-2xl font-bold text-white hover:text-white/80 transition-all duration-300 transform hover:scale-105">
              Cliendly
            </div>
          </Link>

          <div className="flex items-center space-x-2">
            <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              <FaMoon className="h-5 w-5" />
            </button>

            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <FaGlobe className="h-5 w-5" />
                <span className="text-xs font-medium">{i18n.language.toUpperCase()}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-24 bg-white/95 backdrop-blur-md rounded-lg shadow-lg py-1 z-50 border border-white/20">
                  <button
                    onClick={() => toggleLanguage('es')}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                      i18n.language === 'es' 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : 'text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                      i18n.language === 'en' 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : 'text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/Login")}
              className="flex items-center space-x-2 px-3 py-2 bg-white/20 hover:bg-white/30 
                       text-white font-medium rounded-lg transition-all duration-200 
                       transform hover:scale-105 shadow-lg border border-white/30"
            >
              <FaSignInAlt className="h-4 w-4" />
              <span className="hidden sm:block text-sm">{t('login')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
