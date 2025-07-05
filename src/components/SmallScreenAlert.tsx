"use client";
import React, { useState } from "react";

const SmallScreenAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleContinue = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="sm:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div className="mx-4 max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <svg
            className="h-16 w-16 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          Better Experience on Desktop
        </h2>

        <p className="mb-6 text-lg text-gray-300">
          For the best experience with all features and optimal viewing, please
          open this website on a desktop or laptop computer.
        </p>

        <div className="mb-8 space-y-3 text-left">
          <div className="flex items-center text-gray-300">
            <svg
              className="mr-3 h-5 w-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Full carousel experience
          </div>
          <div className="flex items-center text-gray-300">
            <svg
              className="mr-3 h-5 w-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Interactive video content
          </div>
          <div className="flex items-center text-gray-300">
            <svg
              className="mr-3 h-5 w-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Enhanced navigation
          </div>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleContinue}
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Continue Anyway
          </button>

          <p className="text-sm text-gray-400">
            Or bookmark this page and return on desktop
          </p>
        </div>

        <div className="mt-8 opacity-60">
          <p className="text-sm text-gray-400">
            Wonderla - Where Fun Meets Adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenAlert;
