import React from 'react';
import { User } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png';

const LoginPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#FAFAFA] p-6">
      <div className="flex gap-8 max-w-7xl mx-auto">
        {/* Left sidebar */}
        <div className="w-[354px] p-6 space-y-6 relative bg-white rounded-lg shadow-md">
          {/* Logo */}
          <div className="h-[187px] flex items-center justify-center">
            <img src={myImage} alt="CURE.AI Logo" className="w-36 h-36 mb-2" />
            {/* Replace with actual logo */}
            <div className="text-2xl font-bold"></div>
          </div>

          {/* Profile section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center">
              <User size={60} className="text-gray-500" />
            </div>
            <div className="space-y-2 text-center">
              <p className="text-2xl">Rahul Gandhi</p>
              <p className="text-2xl">Age: 43 years</p>
              <p className="text-2xl">Male</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-black/50 my-6"></div>

          {/* Previous Conversation */}
          <div className="text-xl font-medium text-center">
            Previous Conversation
          </div>
        </div>

        {/* Main content */}
        <div
          className="flex-1 p-8 flex flex-col items-center justify-center bg-white rounded-lg shadow-md"
          style={{ width: '960px', height: '660px' }} // Set fixed dimensions
        >
          <div className="max-w-md w-full space-y-8">
            <h1 className="text-4xl text-[#494949] text-center font-medium">
              Login to continue
            </h1>

            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-4 border border-black/30 rounded-2xl text-lg"
                />
              </div>

              <div className="space-y-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-4 border border-black/30 rounded-2xl text-lg"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="border-t border-black"></div>
              <div className="flex justify-center items-center gap-1 text-sm">
                <span className="font-bold">Don't have a profile yet?</span>
                <a href="#" className="underline text-[#2A2A2A]">
                  Sign-up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;