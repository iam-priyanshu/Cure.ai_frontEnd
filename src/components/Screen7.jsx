import React from 'react';
import myImage from "../assets/cureAiLogo.png";

const Screen7 = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 bg-white shadow-lg p-6 flex flex-col">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="text-center">
            <img 
              src={myImage}  // ✅ Use the imported image
              alt="CURE.AI Logo" 
              className="w-52 mb-1"
            />
            <h1 className="text-blue-600 text-2xl font-bold"></h1>
          </div>
        </div>
        
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                <circle cx="50" cy="35" r="20" fill="currentColor" />
                <path 
                  d="M10,85 C10,65 90,65 90,85" 
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-1">Rahul Gandhi</h2>
            <p className="text-gray-600 mb-1">Age: 43 years</p>
            <p className="text-gray-600">Male</p>
          </div>
          
          <hr className="my-6" />
          
          <button className="w-full text-left text-gray-700 font-medium">
            Previous Conversation
          </button>
        </div>
        
        {/* Upload Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full py-3 px-6 flex items-center justify-center mb-8 transition duration-200">
          Upload Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* End Conversation Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white rounded-full py-3 px-6 mt-auto transition duration-200">
          End Conversation
        </button>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* This is the empty white space for conversation */}
        <div className="bg-white rounded-2xl shadow-lg h-full w-full p-8">
          {/* Conversation content will go here */}
        </div>
      </div>
    </div>
  );
};

export default Screen7;