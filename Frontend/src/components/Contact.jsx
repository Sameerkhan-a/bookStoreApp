import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Contact = () => {
  
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white text-black py-10 px-4 mt-20">
      <div className="max-w-xl mx-auto">
        <form className="space-y-6 bg-white p-6 shadow-md rounded-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none "
              
            />
            
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
              
            />
            
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none "
            ></textarea>
           
          </div>

          <div>
            <Link
                to="/"
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md "
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
