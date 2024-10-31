import React from "react";

import  { useState } from 'react';

function Contactform() {
  const [formData, setFormData] = useState({ name: '',
     email: '',
      subject: '', 
      message: '' 
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (e.g., API call, email service)
    alert('Message Sent!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-600 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-primaryBlue mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-black">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryBlue"
          />
        </div>
        <div>
          <label className="block text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryBlue"
          />
        </div>
        <div>
          <label className="block text-black">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryBlue"
          />
        </div>
        <div>
          <label className="block text-black">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryBlue"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primaryBlue text-white py-2 rounded-md hover:bg-primaryBlue-dark transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contactform;
