import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close sidebar when a menu item is clicked
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold">Chetan_Barange_</h1>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <div
          ref={sidebarRef}
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-10`}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <Link to="/" className="px-4 py-2 hover:bg-gray-700" onClick={handleMenuClick}>
              Home
            </Link>
            <Link to="/skills" className="px-4 py-2 hover:bg-gray-700" onClick={handleMenuClick}>
              Skills
            </Link>
            <Link to="/projects" className="px-4 py-2 hover:bg-gray-700" onClick={handleMenuClick}>
              Projects
            </Link>
            <Link to="/resume" className="px-4 py-2 hover:bg-gray-700" onClick={handleMenuClick}>
              Resume
            </Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-gray-700" onClick={handleMenuClick}>
              Contact
            </Link>
            <div className="px-4 py-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
