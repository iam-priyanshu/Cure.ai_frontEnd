import React from 'react';
import myImage from "../assets/cureAiLogo.png"; // Adjusted path

const Screen5 = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row gap-6 min-h-screen">
        {/* Left Panel */}
        <div className="w-full md:w-96 flex flex-col gap-6 bg-white p-6">
          {/* Centered Content Above Profile Card */}
          <div className="flex justify-center">
            <div className="text-center">
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col">
            <img src={myImage} alt="CURE.AI Logo" className="w-40 h-40 mb-2 mx-auto" />
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                  <div className="text-gray-500">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="7" r="4" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-2 right-0">
                  <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-2">Rahul Gandhi</h2>
              <p className="text-gray-600 mt-1">Age: 43 years</p>
              <p className="text-gray-600">Male</p>
            </div>
            <div className="w-full h-px bg-gray-200 my-6"></div>
            <button className="text-gray-700 text-left">
              Previous Conversation
            </button>
            <div className="flex-1"></div>
          </div>
          
          {/* End Consultation Button */}
          <button className="w-full bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 transition-colors">
            End Consultation
          </button>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-8">Hope you are all set</h1>
            
            <div className="flex gap-4 mb-8">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                Transcript
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                Summary
              </button>
            </div>

            <p className="text-gray-600 mb-8">Last conversation ended on 23:00</p>
            
            <div className="text-center">
              <a href="#" className="text-blue-600 hover:underline">Login to continue</a>
              <p className="mt-2">
                Don't have a profile yet? 
                <a href="#" className="text-blue-600 hover:underline ml-1">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen5;