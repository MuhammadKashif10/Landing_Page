import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" alt="About Us" className="w-full rounded mb-6" />
        <p className="text-lg text-gray-700 mb-4">
          We are a passionate team dedicated to delivering top-notch digital solutions for businesses of all sizes. Our mission is to empower organizations with innovative technology, creative design, and reliable support.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To help businesses grow and succeed by providing high-quality, customized digital services that drive results and create lasting value.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Innovation & Excellence</li>
          <li>Integrity & Transparency</li>
          <li>Customer-Centric Approach</li>
          <li>Collaboration & Teamwork</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Meet the Team</h2>
        <p className="text-gray-700 mb-4">
          Our talented professionals bring diverse skills and expertise to every project, ensuring exceptional results for our clients.
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block text-center mt-6">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default About; 