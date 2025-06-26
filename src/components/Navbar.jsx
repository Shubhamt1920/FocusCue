import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="w-full bg-indigo-900 text-white shadow-md px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight mb-2 sm:mb-0">
        Focus<span className="text-indigo-300">Cue</span>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium">
        {["Home", "About", "Contact", "Your Tasks"].map((label) => (
          <li key={label}>
            <Link
              to={
                label === "Home" || label === "Your Tasks"
                  ? "/"
                  : `/${label.toLowerCase()}`
              }
              className="relative group transition-all duration-300 hover:text-indigo-300"
            >
              {label}
              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-3 sm:mt-0 bg-slate-100 dark:bg-slate-800 text-indigo-900 dark:text-white px-3 py-1 rounded-full text-sm font-semibold transition-all hover:scale-105"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
