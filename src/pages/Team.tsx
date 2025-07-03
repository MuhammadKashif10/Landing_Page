import React from "react";

const Team = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Team</h1>
        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80" alt="Our Team" className="w-full rounded mb-6" />
        <p className="text-lg text-gray-700 mb-4">
          Meet the talented professionals who drive our success. Our team is composed of experts in technology, design, and business, all working together to deliver exceptional results for our clients.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Team Members</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Jane Doe – CEO & Founder</li>
          <li>John Smith – Lead Developer</li>
          <li>Emily Johnson – UI/UX Designer</li>
          <li>Michael Brown – Project Manager</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Approach</h2>
        <p className="text-gray-700 mb-4">
          We believe in collaboration, innovation, and a client-first mindset. Every project is a team effort, and we are committed to achieving the best outcomes for our partners.
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline block text-center mt-6">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Team; 