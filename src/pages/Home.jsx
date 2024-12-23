import React from 'react';
import Profilepic from "../Asset/profilepic.jpg"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-40 blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Hi, I'm <span className="text-yellow-400">Chetan Barange</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          <span className="animate-typewriter text-yellow-200">Software Developer | Frontend Enthusiast | | MERN Stack Developer</span>
        </p>
        <div className="flex justify-center space-x-4">
        <Link
            to="/projects"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg shadow-md hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* 3D Image Card */}
      <div className="absolute top-20 transform hover:rotate-3 transition-transform duration-500">
        <img
          src={Profilepic}
          alt="Profile"
          className="w-42 h-52 rounded-full shadow-lg hover:shadow-2xl"
        />
      </div>
    </div>
    {/* <div className='bg-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
    <section className=" text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Chetan Barange
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Software Engineer | Frontend Enthusiast | MERN Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-white text-blue-500 px-6 py-2 rounded shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-500 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
    </div> */}
    </>
  );
};

export default Home;
