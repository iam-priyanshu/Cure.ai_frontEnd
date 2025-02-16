import React from 'react';
import { User, ArrowUpRight } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png';
const MedicalProfile = () => {
  return (
    <div className="h-screen w-screen bg-[#FAFAFA] overflow-hidden">
      <div className="h-full w-full flex flex-col lg:flex-row">
        {/* Left sidebar */}
        <div className="w-80 bg-white shadow-lg p-6 flex flex-col">
          {/* Logo */}
          <div className="h-[100px] lg:h-[140px] flex items-center justify-center">
            <div className="w-28 h-28 lg:w-32 lg:h-32">
              <img 
                src={myImage}
                alt="CURE.AI Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          {/* Profile section */}
          <div className="flex-1 flex flex-col items-center space-y-6">
            <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-gray-200 flex items-center justify-center">
              <User size={48} className="text-gray-500 lg:w-16 lg:h-16" />
            </div>
            <div className="space-y-2 text-center">
              <p className="text-xl lg:text-2xl">Rahul Gandhi</p>
              <p className="text-xl lg:text-2xl">Age: 43 years</p>
              <p className="text-xl lg:text-2xl">Male</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4 lg:my-6"></div>

          {/* Previous Conversation */}
          <div className="text-lg lg:text-xl font-medium text-center mb-6">
            Previous Conversation
          </div>

          {/* Upload Now Button */}
          <button className="w-full bg-[#22C55E] text-white py-3 rounded-lg hover:bg-[#1EA750] transition-colors flex items-center justify-center space-x-2">
            <span className="text-lg">Upload Now</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          {/* End Conversation Button */}
          <button className="mt-4 w-full bg-[#FF4141] text-white py-3 rounded-lg hover:bg-[#FF2525] transition-colors">
            End Conversation
          </button>
        </div>

        {/* Main content area */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3">
          <div className="w-full max-w-4xl h-full bg-white rounded-3xl shadow-lg">
            {/* Content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalProfile;