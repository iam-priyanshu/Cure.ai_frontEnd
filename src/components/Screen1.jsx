import React from 'react';
import myImage from "../assets/cureAiLogo.png";

const Screen1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-blue-600">
              <img 
                src={myImage}  
                alt="CURE.AI Logo" 
                className="w-40 h-40" 
              />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-semibold text-center">
            Your Trusted AI Healthcare Partner
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 max-w-md">
            Experience personalized health guidance through intuitive and natural conversations.
          </p>

          {/* CTA Buttons */}
          <div className="w-full space-y-4">
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-md transition-colors">
              Get Started
            </button>
            
            <button className="w-full text-gray-600 hover:text-gray-900 py-3 rounded-md transition-colors">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
