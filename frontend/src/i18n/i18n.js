import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // Auth
      "login": "Iniciar Sesión",
      "register": "Registrarse",
      "email": "Correo electrónico",
      "password": "Contraseña",
      "forgotPassword": "¿Olvidaste tu contraseña?",
      "noAccount": "¿No tienes una cuenta?",
      "hasAccount": "¿Ya tienes cuenta?",
      "registerHere": "Regístrate aquí",
      "loginHere": "Inicia sesión aquí",
      "orContinueWith": "O continúa con",
      "orRegisterWith": "O regístrate con",
      
      // Recovery
      "recoverPassword": "Recuperar Contraseña",
      "recoverPasswordDesc": "Ingresa tu correo para recuperar tu contraseña",
      "sendRecoveryLink": "Enviar enlace de recuperación",
      "backToLogin": "Volver al login",
      
      // Register
      "createAccount": "Crear Cuenta",
      "joinPlatform": "Únete a nuestra plataforma",
      "fullName": "Nombre completo",
      "yourFullName": "Tu nombre completo",
      
      // Dashboard
      "dashboard": "Dashboard",
      "home": "Inicio",
      "clients": "Clientes",
      "memberships": "Membresías",
      "attendance": "Asistencias",
      "classes": "Clases",
      "payments": "Pagos",
      "instructors": "Instructores",
      "messages": "Mensajes",
      "settings": "Configuración",
      "logout": "Cerrar sesión",
      "manageGym": "Gestiona tu gimnasio de manera eficiente",
      
      // Stats
      "totalClients": "Total Clientes",
      "monthlyIncome": "Ingresos Mensuales",
      "todayAttendance": "Asistencias Hoy",
      "recentActivity": "Actividad Reciente",
      "upcomingClasses": "Próximas Clases",
      
      // Search
      "search": "Buscar...",
      "searchClients": "Buscar clientes, clases, etc...",
      
      // Profile
      "myAccount": "Mi Cuenta",
      "myProfile": "Mi Perfil",
      "administrator": "Administrador"
    }
  },
  en: {
    translation: {
      // Auth
      "login": "Sign In",
      "register": "Sign Up",
      "email": "Email address",
      "password": "Password",
      "forgotPassword": "Forgot your password?",
      "noAccount": "Don't have an account?",
      "hasAccount": "Already have an account?",
      "registerHere": "Sign up here",
      "loginHere": "Sign in here",
      "orContinueWith": "Or continue with",
      "orRegisterWith": "Or sign up with",
      
      // Recovery
      "recoverPassword": "Recover Password",
      "recoverPasswordDesc": "Enter your email to recover your password",
      "sendRecoveryLink": "Send recovery link",
      "backToLogin": "Back to login",
      
      // Register
      "createAccount": "Create Account",
      "joinPlatform": "Join our platform",
      "fullName": "Full name",
      "yourFullName": "Your full name",
      
      // Dashboard
      "dashboard": "Dashboard",
      "home": "Home",
      "clients": "Clients",
      "memberships": "Memberships",
      "attendance": "Attendance",
      "classes": "Classes",
      "payments": "Payments",
      "instructors": "Instructors",
      "messages": "Messages",
      "settings": "Settings",
      "logout": "Sign out",
      "manageGym": "Manage your gym efficiently",
      
      // Stats
      "totalClients": "Total Clients",
      "monthlyIncome": "Monthly Income",
      "todayAttendance": "Today's Attendance",
      "recentActivity": "Recent Activity",
      "upcomingClasses": "Upcoming Classes",
      
      // Search
      "search": "Search...",
      "searchClients": "Search clients, classes, etc...",
      
      // Profile
      "myAccount": "My Account",
      "myProfile": "My Profile",
      "administrator": "Administrator"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;