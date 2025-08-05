import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = ({ onBackToLogin }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 w-full max-w-sm mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              {t('createAccount')}
            </h2>
            <p className="text-green-100 text-sm">
{t('joinPlatform')}
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <FaUser className="inline mr-2" />
{t('fullName')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-lg 
                         text-white placeholder-green-200 focus:outline-none focus:ring-2 
                         focus:ring-green-400 focus:border-transparent transition-all duration-200 h-[44px]"
placeholder={t('yourFullName')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <FaEnvelope className="inline mr-2" />
{t('email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-lg 
                         text-white placeholder-green-200 focus:outline-none focus:ring-2 
                         focus:ring-green-400 focus:border-transparent transition-all duration-200 h-[44px]"
placeholder={t('email')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-green-100 mb-2">
                <FaLock className="inline mr-2" />
{t('password')}
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-lg 
                         text-white placeholder-green-200 focus:outline-none focus:ring-2 
                         focus:ring-green-400 focus:border-transparent transition-all duration-200 h-[44px]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 
                       hover:to-green-800 text-white font-medium py-2.5 px-4 rounded-lg 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
                       focus:ring-offset-transparent h-[44px] flex items-center justify-center"
            >
              {t('createAccount')}
            </button>
          </form>

          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-green-100 font-medium">{t('orRegisterWith')}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-full flex justify-center">
              <div style={{ height: '44px', colorScheme: "light", maxWidth: '100%', overflow: 'hidden' }}>
                <GoogleLogin
                  size="large"
                  width="280"
                  theme="filled_blue"
                  text="signup_with"
                  shape="circle"
                  logo_alignment="center"
                  ux_mode="popup"
                  useOneTap={false}
                  onSuccess={(credentialResponse) => {
                    if (credentialResponse.credential) {
                      const decoded = jwtDecode(credentialResponse.credential);
                      console.log(decoded);
                      navigate("/home");
                    } else {
                      console.error("No se recibió el token");
                    }
                  }}
                  auto_select={false}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-green-100">
{t('hasAccount')}{" "}
              <button
                type="button"
                onClick={onBackToLogin}
                className="font-medium text-white hover:text-green-200 transition-colors 
                         duration-200 hover:underline"
              >
{t('loginHere')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
