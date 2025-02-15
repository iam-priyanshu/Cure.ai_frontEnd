import React from 'react';
import { Upload, Mic } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png';

const Screen3 = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Left sidebar */}
      <div className="w-full md:w-80 p-6 flex flex-col border-r border-gray-200">
        <div className="flex flex-col items-center mb-10">
          <img src={myImage} alt="CURE.AI Logo" className="w-32 h-32 mb-2" />
          <span className="text-blue-600 font-bold text-xl"></span>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-4"></div>
          <h2 className="text-xl font-semibold mb-1">Rahul Gandhi</h2>
          <p className="text-gray-500 text-sm mb-1">Age: 43 years</p>
          <p className="text-gray-500 text-sm">Male</p>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-gray-600 mb-4">Upload your previous document</p>
          <button className="w-full bg-green-500 text-white rounded-md py-3 flex items-center justify-center">
            <span>Upload Now</span>
            <Upload className="ml-2" size={18} />
          </button>
        </div>
        
        <div className="mt-auto">
          <button className="w-full bg-red-500 text-white rounded-md py-3">
            End Consultation
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex-1 flex flex-col items-center justify-center mb-10">
          <h1 className="text-3xl font-bold text-center mb-2">How can I help you today</h1>
          <h2 className="text-3xl font-bold text-center mb-8">with your health?</h2>
          
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-400"></div>
        </div>
        
        <div className="relative w-full max-w-3xl mx-auto mt-auto mb-4">
          <input
            type="text"
            placeholder="Type more to elaborate your health condition"
            className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-12"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Mic size={18} />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 8 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;