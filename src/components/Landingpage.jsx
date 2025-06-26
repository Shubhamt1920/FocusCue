import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4">
          Welcome to <span className="tracking-tight">FocusCue</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 animate-pulse-slow">
          Stay focused. One task at a time. Build streaks. Stay consistent.
        </p>

        <Link
          to="/app"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-indigo-500/50 transition-all duration-300 animate-bounce-slow"
        >
          🚀 Start Managing Tasks
        </Link>

        <div className="mt-10 text-xs text-slate-500 dark:text-slate-400">
          Built with ❤️ using React + Tailwind
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
