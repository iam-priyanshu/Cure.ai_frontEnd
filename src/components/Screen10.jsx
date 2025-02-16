import React from 'react';
import { Upload, Mic, Globe } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png';

const Screen10 = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Left sidebar - patient info */}
      <div className="w-80 bg-white shadow-lg p-6 flex flex-col">
              {/* Logo */}
              <div className="flex flex-col items-center mb-8">
                <img src={myImage} 
                alt="CURE.AI Logo" 
                className="w-36 h-36 mb-2" 
                />
              </div>
      
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-1">Rahul Gandhi</h2>
                <p className="text-gray-600 mb-1">Age: 43 years</p>
                <p className="text-gray-600">Male</p>
              </div>
      
              {/* End Button */}
              <button className="mt-auto bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200">
                End Consultation
              </button>
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