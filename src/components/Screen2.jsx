import React, { useState } from 'react';
import { Info } from 'lucide-react';
import myImage from '../assets/cureAiLogo.png'; // Import the image

const Screen2 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    cityPinCode: '',
    state: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center space-y-2">
            <img src={myImage} 
            alt="CURE.AI Logo" 
            className= "w-40 h-40" 
            />
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-2">
          <Info className="text-blue-600 w-5 h-5" />
          <p className="text-sm text-blue-800">
            We collect these details to provide personalized health recommendations
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="age"
              placeholder="Age*"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={formData.age}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender*"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="cityPinCode"
              placeholder="City/Pin Code*"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={formData.cityPinCode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State*"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Chat with health consultant
            </button>
            <button
              type="button"
              className="w-full bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Lab Report Interpretation & Analytics
            </button>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreed"
              className="mt-1"
              checked={formData.agreed}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-600">
              Its assistive guidance only and should not be used for emergency purposes.
            </p>
          </div>
        </form>

        {/* Language Toggle */}
        <div className="absolute bottom-4 right-4">
          <span className="text-xl">🌐</span>
        </div>
      </div>
    </div>
  );
};

export default Screen2;