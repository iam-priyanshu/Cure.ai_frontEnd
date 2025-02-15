import React from 'react';

const CureAILanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 space-y-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-blue-600">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2v-2zm0-8h2v6h-2V6z" />
            </svg>
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