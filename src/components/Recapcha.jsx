import React, { useState } from 'react';

const Recaptcha = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-3 flex items-center gap-3">
          <div 
            className="relative w-6 h-6 flex items-center justify-center"
            onClick={handleCheck}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheck}
              className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
            />
            {isChecked && (
              <svg
                className="absolute w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          
          <span className="text-gray-600 text-sm">I am not a robot</span>
          
          <div className="ml-auto">
            <svg 
              className="w-8 h-8 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
              <path d="M15.707 9.707l-4.5 4.5a1 1 0 01-1.414 0l-2.5-2.5 1.414-1.414L10.5 12.086l3.793-3.793 1.414 1.414z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recaptcha;