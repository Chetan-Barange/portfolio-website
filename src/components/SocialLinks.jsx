import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <>
    <div className="flex space-x-4">
      {/* GitHub Link */}
      <a
        href="https://github.com/Chetan-Barange"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200  text-2xl"
      >
        <FaGithub />
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://linkedin.com/in/chetan-barange-265633201"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 text-2xl"
      >
        <FaLinkedin />
      </a>
    </div>
    </>
  );
};

export default SocialLinks;
