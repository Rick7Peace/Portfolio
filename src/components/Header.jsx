import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  // 'location' stores the current page location, which is useful to highlight the active link in the navigation.
  const location = useLocation();
  
  // 'isOpen' is a state variable that controls the visibility of the mobile menu. 'setIsOpen' updates its value.
  const [isOpen, setIsOpen] = useState(false);

  // 'toggleMenu' is a function that toggles the value of 'isOpen', opening or closing the mobile menu.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-stone-300 p-4 md:p-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center tracking-wider antialiased">
        {/* Navigation link to homepage */}
        <Link to="/">
          <h1 className="text-4xl md:text-4xl text-black font-bold cursor-pointer">
            Ricardo Marmolejo
          </h1>
        </Link>

        {/* Hamburger button for mobile, which toggles the mobile menu visibility */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation links (visible on medium screens and larger) */}
        <nav
          className={`${
            isOpen ? "hidden" : "flex"
          } md:flex space-x-4 text-black hidden md:block`}
        >
          {/* About link */}
          <Link to="/" className={location.pathname === "/" ? "text-xl text-yellow-800" : ""}>
            ABOUT
          </Link>
          {/* Portfolio link */}
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "text-xl text-yellow-800" : ""}>
            PORTFOLIO
          </Link>
          {/* Contact link */}
          <Link to="/contact" className={location.pathname === "/contact" ? "text-xl text-yellow-800" : ""}>
            CONTACT
          </Link>
          {/* Resume link */}
          <Link to="/resume" className={location.pathname === "/resume" ? "text-xl text-yellow-800" : ""}>
            RESUME
          </Link>
        </nav>
      </div>

      {/* Mobile menu (visible when hamburger button is clicked) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4 text-center bg-stone-200 rounded-lg shadow-lg p-4`}
      >
        {/* Mobile About link */}
        <Link to="/" className="block py-2 text-black" onClick={toggleMenu}>
          ABOUT
        </Link>
        {/* Mobile Portfolio link */}
        <Link to="/portfolio" className="block py-2 text-black" onClick={toggleMenu}>
          PORTFOLIO
        </Link>
        {/* Mobile Contact link */}
        <Link to="/contact" className="block py-2 text-black" onClick={toggleMenu}>
          CONTACT
        </Link>
        {/* Mobile Resume link */}
        <Link to="/resume" className="block py-2 text-black" onClick={toggleMenu}>
          RESUME
        </Link>
      </div>
    </header>
  );
}
