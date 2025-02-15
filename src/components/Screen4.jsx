import React, { useState } from 'react';
import { Mic, Languages } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png';

const Screen4 = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg p-6 flex flex-col">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={myImage} alt="CURE.AI Logo" className="w-36 h-36 mb-2" />
          <span className="text-blue-600 font-bold text-xl"></span>
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

      {/* Chat Area */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex-1 mb-6">
          {/* AI Message */}
          <div className="flex items-start gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-2xl">
              Hi Rahul, how can I assist with your brain?
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-2xl">
              Nothing can happen.
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3">
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Mic className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type more to elaborate your health condition"
            className="flex-1 outline-none text-gray-600"
          />
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Languages className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen4;