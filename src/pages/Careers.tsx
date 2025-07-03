import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-center">Careers</h1>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Careers" className="w-full rounded mb-6" />
        <p className="text-lg text-gray-700 mb-4">
          Join our team and help us build amazing digital solutions! Explore our current job openings below:
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Available Jobs</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Frontend Developer</strong> – Work with React, TypeScript, and modern UI frameworks to build beautiful user experiences.
          </li>
          <li>
            <strong>Backend Developer</strong> – Design and implement robust APIs and backend services using Node.js and cloud technologies.
          </li>
          <li>
            <strong>UI/UX Designer</strong> – Create intuitive and engaging designs for web and mobile applications.
          </li>
          <li>
            <strong>Project Manager</strong> – Lead cross-functional teams and ensure timely delivery of high-quality projects.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Interested? Send your resume and cover letter to <a href="mailto:careers@example.com" className="text-blue-500 hover:text-blue-700 underline">careers@example.com</a>
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block text-center mt-6">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Careers; 