import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Chetan_Barange_</h1>
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-4`}
        >
          <Link to="/" className="px-4">Home</Link>
          <Link to="/skills" className="px-4">skills</Link>
          <Link to="/projects" className="px-4">Projects</Link>
          <Link to="/resume" className="px-4">Resume</Link>
          <Link to="/contact" className="px-4">Contact</Link>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
