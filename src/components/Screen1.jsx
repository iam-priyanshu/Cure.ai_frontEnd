import React from 'react';
import myImage from '../assets/cureAiLogo.png';

const CureAILanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
           <img 
            src={myImage}  
            alt="CURE.AI Logo" 
            className="w-[10] h-[10]" 
            />
          </div>
          {/* Brand Name */}
          <div className="text-blue-600 text-2xl font-bold">
            CURE.AI
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl font-semibold text-center">
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

export default CureAILanding;