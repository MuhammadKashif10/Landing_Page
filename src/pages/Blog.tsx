import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-center">Technology Blog</h1>
        <p className="text-lg text-gray-700 mb-4">
          Stay updated with the latest trends, insights, and tutorials in technology, design, and business growth.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Latest Articles</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>How AI is Transforming Business</strong> – Explore the impact of artificial intelligence on modern enterprises and workflows.
          </li>
          <li>
            <strong>Top 10 Web Development Trends in 2024</strong> – Discover the latest tools, frameworks, and best practices for building robust web applications.
          </li>
          <li>
            <strong>Designing for Accessibility</strong> – Learn how to create inclusive digital experiences for all users.
          </li>
          <li>
            <strong>Cloud Computing: What You Need to Know</strong> – An introduction to cloud services and how they benefit businesses of all sizes.
          </li>
        </ul>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block text-center mt-6">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Blog; 