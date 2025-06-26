import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import MainApp from "./components/MainApp";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200 dark:from-slate-900 dark:to-slate-800 transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="text-center mt-20 text-2xl text-slate-700 dark:text-white">
                  404 – Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
