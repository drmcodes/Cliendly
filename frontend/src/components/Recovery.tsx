import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Recovery = ({ onBackToLogin }) => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 w-full max-w-sm mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2">
{t('recoverPassword')}
            </h2>
            <p className="text-green-100 text-sm">
{t('recoverPasswordDesc')}
            </p>
          </div>

          <form className="space-y-6">
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 
                       hover:to-green-800 text-white font-medium py-2.5 px-4 rounded-lg 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
                       focus:ring-offset-transparent h-[44px] flex items-center justify-center"
            >
{t('sendRecoveryLink')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onBackToLogin}
              className="flex items-center justify-center mx-auto text-sm text-green-200 
                       hover:text-white transition-colors duration-200 hover:underline font-medium"
            >
              <FaArrowLeft className="mr-2" />
{t('backToLogin')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
