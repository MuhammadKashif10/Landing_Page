import React from "react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-center">Case Studies</h1>
        <p className="text-lg text-gray-700 mb-4">
          Discover how we've helped businesses achieve their goals through our innovative solutions and dedicated support.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Featured Case Studies</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Retail Revolution</strong> – Helped a retail chain increase online sales by 40% with a new e-commerce platform.
          </li>
          <li>
            <strong>Healthcare Connect</strong> – Enabled remote consultations for a hospital network, improving patient access and satisfaction.
          </li>
          <li>
            <strong>FinTech Growth</strong> – Built a secure, scalable app for a fintech startup, supporting rapid user growth.
          </li>
          <li>
            <strong>EdTech Success</strong> – Developed an interactive learning platform adopted by schools nationwide.
          </li>
        </ul>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block text-center mt-6">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default CaseStudies; 