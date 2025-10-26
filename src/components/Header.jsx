import { useState } from "react";
import {
  FiHome,
  FiSettings,
  FiMessageCircle,
  FiPhoneCall,
} from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-blue-950 text-white px-4 sm:px-6 lg:px-8 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="retro-title text-2xl sm:text-3xl font-bold text-yellow-300 h-[70px] w-[70px]">
          <img className="h-[60px] w-[60px] rounded-full " src="/src/assets/booster.jpg" alt="" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FiHome /> Home
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FiSettings /> Features
          </a>
          <a
            href="#testimonials"
            className="flex items-center gap-2 text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FiMessageCircle /> Testimonials
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            <FiPhoneCall /> Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-yellow-300 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 mt-4 px-2 pb-4 bg-black border-t border-yellow-300">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            <FiHome /> Home
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 text-lg hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            <FiSettings /> Features
          </a>
          <a
            href="#testimonials"
            className="flex items-center gap-2 text-lg hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            <FiMessageCircle /> Testimonials
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-lg hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            <FiPhoneCall /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
