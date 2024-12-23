import React from 'react';

const Resume = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      {/* Resume Preview */}
      <div className="mb-8">
        <iframe
          src={resumeUrl}
          title="Resume Preview"
          className="w-full h-[500px] border"
        ></iframe>
      </div>

      {/* Download and Fullscreen Buttons */}
      <div className="flex space-x-4">
        <a
          href={resumeUrl}
          download="Chetan_Barange_Resume.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download Resume
        </a>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          View in Fullscreen
        </a>
      </div>
    </div>
  );
};

export default Resume;
