import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-900 text-white py-4 mt-auto">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} FocusCue. Built with ❤️ using React &
        TailwindCSS.
      </div>
    </footer>
  );
};

export default Footer;
