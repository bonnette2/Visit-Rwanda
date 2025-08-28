import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold text-black">Visit Rwanda</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-black">
          <ul className="flex gap-10 items-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destination">Destination</Link></li>
            <li><Link to="/culture">Culture</Link></li>

            {/* Dropdown Menu */}
            <li className="relative group">
              <div
                onClick={() => setDropdownOpen(prev => !prev)}
                className="hover:text-[#946B29] cursor-pointer"
              >
                Plan a Trip ▾
              </div>
              {dropdownOpen && (
                <div
                  className="absolute bg-white mt-2 shadow-lg rounded-md p-2 w-48 z-50"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link to="/accomodation" className="block px-4 py-2 hover:bg-gray-100">Accommodation</Link>
                  <Link to="/iteneraries" className="block px-4 py-2 hover:bg-gray-100">Itineraries</Link>
                  <Link to="/transportation" className="block px-4 py-2 hover:bg-gray-100">Transportation</Link>
                </div>
              )}
            </li>

            <li><Link to="/news">News & Events</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col gap-4 text-black">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/destination" onClick={toggleMenu}>Destination</Link></li>
            <li><Link to="/culture" onClick={toggleMenu}>Culture</Link></li>
            <li><Link to="/accomodation" onClick={toggleMenu}>Accommodation</Link></li>
            <li><Link to="/iteneraries" onClick={toggleMenu}>Itineraries</Link></li>
            <li><Link to="/transportation" onClick={toggleMenu}>Transportation</Link></li>
            <li><Link to="/news" onClick={toggleMenu}>News & Events</Link></li>
            <li><Link to="/contacts" onClick={toggleMenu}>Contacts</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
