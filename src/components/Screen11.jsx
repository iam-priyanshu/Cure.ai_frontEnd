import React from 'react';
import myImage from '../assets/cureAiLogo.png';

const Screen11 = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full h-full max-w-[1440px] flex gap-8">
        {/* Left Column - Profile Section */}
        <div className="w-[320px] flex flex-col gap-4">
          {/* Logo - Now Centered */}
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center mb-8">
                      <img src={myImage} alt="CURE.AI Logo" className="w-36 h-36 mb-2" />
                      <span className="text-blue-600 font-bold text-xl"></span>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-md p-4 flex-1">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <svg className="w-14 h-14 text-gray-400" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>

              <h2 className="text-xl font-['Gilroy-Regular'] mb-1">Rahul Gandhi</h2>
              <p className="text-lg font-['Gilroy-Regular'] mb-1">Age: 43 years</p>
              <p className="text-lg font-['Gilroy-Regular'] mb-2">Male</p>
              
              <a href="#" className="text-blue-600 underline text-sm font-['Gilroy-Medium'] mb-2">
                Edit your profile
              </a>

              <div className="w-[200px] border-t border-black/50 my-3"></div>
              
              <p className="text-lg font-['Gilroy-Medium'] mb-3">High Level - Without Doc</p>
              
              <button className="w-[250px] h-[45px] bg-yellow-400 rounded-full text-lg font-['Gilroy-Medium'] mb-3">
                Transcript
              </button>

              <p className="text-xs text-black/75 text-center max-w-[250px] mb-3">
                The information provided is based on specific dataset and information provided by the user and efficacy of the diagnosis is currently being improvised.
              </p>
            </div>
          </div>

          {/* Analysis Status */}
          <div className="w-full h-[80px] bg-red-400/75 rounded-[20px] shadow-lg flex items-center justify-center">
            <p className="text-xl text-white font-['Gilroy-Medium']">Analysis Awaited</p>
          </div>
        </div>

       {/* Right Section */}
       <div className="flex-1 ml-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chief Complaints */}
            <div className="space-y-4">
              <h3 className="text-xl font-['Gilroy-Medium'] text-center">Chief Complaints</h3>
              <div className="w-full h-[300px] bg-white rounded-2xl shadow-md p-6"></div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="text-xl font-['Gilroy-Medium'] text-center">Summary</h3>
              <div className="w-full h-[300px] bg-white rounded-2xl shadow-md p-6"></div>
            </div>
          </div>

          {/* Status and Subscribe */}
          <div className="mt-8 flex flex-col items-center space-y-6">
            <div className="w-[207px] h-[35px] flex items-center justify-center text-xl font-['Gilroy-Medium']">
              Awaited
            </div>
            <div className="w-[913px] h-[148px] bg-white rounded-2xl shadow-md"></div>
            <button className="w-[207px] h-[35px] bg-transparent border border-black rounded-lg text-xl font-['Gilroy-Medium']">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen11;