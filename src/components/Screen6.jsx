import React, { useState } from 'react';
import { User } from 'lucide-react';
import myImage from "../assets/cureAiLogo.png";

const LoginPage = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [email, setEmail] = useState('');

  const handleChatNow = () => {
    setShowOtpInput(true);
  };

  return (
    <div className="h-screen w-screen bg-[#FAFAFA] overflow-hidden">
      <div className="h-full w-full flex flex-col lg:flex-row">
        
        {/* Left sidebar */}
        <div className="w-full lg:w-[400px] h-auto lg:h-full bg-white shadow-lg p-4 lg:p-6 flex flex-col">
          {/* Logo */}
          <div className="h-[100px] lg:h-[187px] flex items-center justify-center">
            <div className="w-28 h-28 lg:w-40 lg:h-40">
             <img 
              src={myImage}  // ✅ Use the imported image
              alt="CURE.AI Logo" 
              className="w-40 h-40 mb-1"
            />
            </div>
          </div>

          {/* Profile section */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
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
          <div className="border-t border-black/50 my-4 lg:my-6"></div>

          {/* Previous Conversation */}
          <div className="text-lg lg:text-xl font-medium text-center pb-4">
            Previous Conversation
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-white lg:bg-[#FAFAFA] flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md bg-white rounded-lg lg:shadow-lg p-6 lg:p-8 space-y-8">
            <h1 className="text-3xl lg:text-4xl text-[#494949] text-center font-medium">
              {showOtpInput ? 'Enter the OTP received on' : 'Login to continue'}
            </h1>

            {showOtpInput ? (
              <>
                <p className="text-center text-lg">{email}</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter 6 digit OTP"
                    className="w-full px-4 py-4 border border-black/30 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={6}
                  />
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-4 border border-black/30 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}

            <button
              onClick={handleChatNow}
              className="w-full bg-[#1E1E1E] text-white py-4 rounded-2xl text-lg hover:bg-[#2A2A2A] transition-colors"
            >
              Chat Now
            </button>

            {!showOtpInput && (
              <div className="space-y-4 pt-6">
                <div className="border-t border-black"></div>
                <div className="flex justify-center items-center gap-1 text-base">
                  <span className="font-bold">Don't have a profile yet?</span>
                  <a href="#" className="underline text-[#2A2A2A] hover:text-black">
                    Sign-up Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;