import React, { useState } from 'react';
import myImage from "../assets/cureAiLogo.png";

const Screen9 = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && value.length <= 6)) {
      setOtp(value);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col items-center lg:items-start justify-center">
            {/* Logo */}
            <div className="w-52 h-52 mb-8">
              <img
                src={myImage}
                alt="CURE.AI Logo"
                className="w-40 h-40 object-contain"
              />
            </div>
            
            {/* Tagline */}
            <h1 className="text-2xl md:text-4xl font-medium text-top lg:text-left leading-tight">
              Your Trusted AI<br />Healthcare<br />Partner
            </h1>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              {/* OTP Header */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-2">
                  Enter the OTP received on
                </h2>
                <p className="text-gray-600">
                  abc@gmail.com or 92112121212
                </p>
              </div>

              {/* OTP Input */}
              <div className="w-full">
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter 6 digit OTP"
                  className="w-full h-16 px-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:border-blue-500 transition-colors"
                  maxLength={6}
                />
              </div>

              {/* Chat Now Button */}
              <button className="w-full h-12 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen9;