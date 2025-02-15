import React from 'react';
import { Upload, Mic, Globe } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png';

const Screen10 = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Left sidebar - patient info */}
      <div className="w-full md:w-80 md:min-h-screen p-6 flex flex-col border-r border-gray-200 md:sticky md:top-0">
        <div className="flex items-center mb-10">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <div className="w-6 h-6 rounded-full border-2 border-white"></div>
          </div>
          <span className="ml-2 text-blue-600 font-bold text-xl">CURE.AI</span>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-1">Rahul Gandhi</h2>
          <p className="text-gray-500 text-sm mb-1">Age: 43 years</p>
          <p className="text-gray-500 text-sm">Male</p>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-gray-600 mb-4">Previous Conversation</p>
        </div>
        
        <div className="mt-auto">
          <button className="w-full bg-red-500 text-white rounded-md py-3">
            End Consultation
          </button>
        </div>
      </div>
      
      {/* Main content - document upload */}
      <div className="flex-1 flex flex-col min-h-screen">
        <div className="flex justify-end p-4">
          <button className="text-blue-600 hover:underline">Skip Now</button>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 max-w-2xl">
            Do you want to add any document/ reports/test/ past prescription?
          </h1>
          
          <button className="bg-green-500 text-white rounded-md py-3 px-6 flex items-center justify-center mb-3">
            <Upload className="mr-2" size={18} />
            <span>Upload Now</span>
          </button>
          
          <p className="text-gray-500 text-sm mb-1">Max. file size 5mb.</p>
          <p className="text-gray-500 text-sm">Please upload a clear image.</p>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="w-full max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Any additional comments/message to help identifying disease more accurately?"
              className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-12"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Mic size={18} />
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Globe size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen10;