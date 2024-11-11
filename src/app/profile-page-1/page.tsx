'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const goalOptions = [
  { icon: "⭐", text: "Fundraising for my Startup" },
  { icon: "💼", text: "Find a job" },
  { icon: "💡", text: "Brainstorm ideas" },
  { icon: "💰", text: "Invest in Startups" },
  { icon: "👥", text: "Hire Talent" },
  { icon: "✓", text: "I don't have a specific goal" }
];

const ProfilePage1: React.FC = () => {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContinue = () => {
    if (selectedGoal) {
      router.push('/profile-page-2');
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-['Plus_Jakarta_Sans']">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#EEEEEE] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-4 text-black">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-black text-lg font-bold leading-tight tracking-[-0.015em]">mingle eat talk</h2>
          </div>
          
          <div className="flex flex-1 justify-end gap-4 items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-9">
              <a className="text-black text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-black text-sm font-medium leading-normal" href="#">Events</a>
              <a className="text-black text-sm font-medium leading-normal" href="#">Contact</a>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Login</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("/api/placeholder/40/40")'
              }}
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-[#EEEEEE] lg:hidden shadow-lg z-50">
              <nav className="flex flex-col items-center py-4">
                <a className="text-black text-sm font-medium leading-normal py-2 hover:text-gray-700 w-full text-center" href="#">About</a>
                <a className="text-black text-sm font-medium leading-normal py-2 hover:text-gray-700 w-full text-center" href="#">Events</a>
                <a className="text-black text-sm font-medium leading-normal py-2 hover:text-gray-700 w-full text-center" href="#">Contact</a>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] mt-2">
                  <span className="truncate">Login</span>
                </button>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-black tracking-light text-2xl sm:text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
              Select Your Goal
            </h1>
            
            <div className="flex gap-2 sm:gap-3 p-3 flex-wrap justify-center">
              {goalOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedGoal(option.text)}
                  className={`flex h-8 items-center justify-center gap-x-2 rounded-full pl-2 pr-3 sm:pr-4 transition-colors ${
                    selectedGoal === option.text
                      ? 'bg-black text-white'
                      : 'bg-[#EEEEEE] text-black hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">{option.icon}</span>
                  <span className="text-xs sm:text-sm font-medium leading-normal">{option.text}</span>
                </button>
              ))}
            </div>

            <div className="flex px-4 py-3 justify-center">
              <button 
                onClick={handleContinue}
                disabled={!selectedGoal}
                className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 ${
                  selectedGoal
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-[#EEEEEE] text-gray-400 cursor-not-allowed'
                } text-base font-bold leading-normal tracking-[0.015em] transition-colors`}
              >
                <span className="truncate">Continue</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <p className="text-[#6B6B6B] text-base font-normal leading-normal">
                © 2024 mingle eat talk
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProfilePage1;