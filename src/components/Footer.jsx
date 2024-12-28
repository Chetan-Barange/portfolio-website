import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Chetan Barange. All rights reserved.</p>
        <SocialLinks />
        <p className="mb-4">Designed & Developed by Chetan Barange.</p>
      </div>
    </footer>
  );
};

export default Footer;
