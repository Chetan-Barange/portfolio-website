import React from 'react';
import { PhoneIcon, MailIcon, LinkIcon, CameraIcon } from '@heroicons/react/solid';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-700 opacity-40 blur-2xl animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fadeIn">
          Get in Touch
        </h2>
        <p className="mb-10 text-lg md:text-xl font-light">
          Have a question or want to work together? Let’s connect!
        </p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center space-x-4">
            <PhoneIcon className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-bold text-xl mb-1">Phone</h4>
              <p className="text-lg">+91 7666331959</p>
            </div>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center space-x-4">
            <MailIcon className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-bold text-xl mb-1">Email</h4>
              <a
                href="mailto:chetanbarangecb@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20profile"
                className="text-lg underline hover:text-blue-600"
              >
                chetanbarangecb@gmail.com
              </a>
            </div>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center space-x-4">
            <LinkIcon className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-bold text-xl mb-1">LinkedIn</h4>
              <a
                href="https://linkedin.com/in/chetan-barange-265633201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline hover:text-blue-600"
              >
                linkedin.com/in/chetan-barange-265633201
              </a>
            </div>
          </div>
          <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center space-x-4">
            <CameraIcon className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-bold text-xl mb-1">Instagram</h4>
              <a
                href="https://www.instagram.com/chetan_barange_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline hover:text-blue-600"
              >
                instagram.com/chetan_barange_/
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
