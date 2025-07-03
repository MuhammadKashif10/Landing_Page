import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Portfolio</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore some of our recent projects that showcase our expertise in technology, design, and business solutions.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Projects</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Project Alpha</strong> – A modern e-commerce platform with seamless user experience and robust backend.
          </li>
          <li>
            <strong>Beta Analytics</strong> – A data visualization dashboard for real-time business insights.
          </li>
          <li>
            <strong>Gamma Connect</strong> – A social networking app designed for professionals and businesses.
          </li>
          <li>
            <strong>Delta Health</strong> – A telemedicine solution connecting patients with healthcare providers online.
          </li>
        </ul>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block text-center mt-6">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Portfolio; 