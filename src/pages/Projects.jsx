import React from 'react';
import InProgress from '../components/InProgress.jsx';

const Projects = () => {
    const projects = [
        {
          title: "E-commerce Product Cart",
          description: "A dynamic cart system built with React and Tailwind CSS.",
          link: "#",
        },
        {
          title: "College Management System",
          description:
            "A CMS for colleges with Laravel and React, supporting dynamic configurations.",
          link: "#",
        },
        {
          title: "Portfolio Website",
          description: "My personal portfolio built with React and Tailwind CSS.",
          link: "#",
        },
      ];
    
      return (
        <>
        <section id="projects" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow-md rounded hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <InProgress/>
        </>
  );
};

export default Projects;
