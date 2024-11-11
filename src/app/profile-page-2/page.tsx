'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Industry {
  id: string;
  name: string;
}

const industries: Industry[] = [
  { id: '1', name: "Consumer Internet" },
  { id: '2', name: "Investor/VC" },
  { id: '3', name: "Big data/AI/IOT/ Robotics" },
  { id: '4', name: "Fintech" },
  { id: '5', name: "Advertising/Digital Marketing" },
  { id: '6', name: "Agritech" },
  { id: '7', name: "Automotive" },
  { id: '8', name: "B2B Services" },
  { id: '9', name: "Construction" }
];

const PreferencesTabPage: React.FC = () => {
  const router = useRouter();
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIndustryChange = (industry: Industry) => {
    setSelectedIndustries(prev => {
      if (prev.some(i => i.id === industry.id)) {
        return prev.filter(i => i.id !== industry.id);
      }
      if (prev.length < 10) {
        return [...prev, industry];
      }
      return prev;
    });
  };

  const handlePrevious = () => {
    router.push('/profile-page-1');
  };

  const handleContinue = () => {
    // Add the route to the next page here
    // router.push('/profile-page-3');
    console.log('Selected industries:', selectedIndustries);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-['Plus_Jakarta_Sans']">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#EEEEEE] px-4 sm:px-6 lg:px-10 py-3">
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
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-black text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-black text-sm font-medium leading-normal" href="#">Events</a>
              <a className="text-black text-sm font-medium leading-normal" href="#">Contact</a>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Login</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-[#EEEEEE] shadow-lg z-50">
              <nav className="flex flex-col w-full py-4">
                <a className="text-black text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50" href="#">About</a>
                <a className="text-black text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50" href="#">Events</a>
                <a className="text-black text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50" href="#">Contact</a>
                <div className="px-4 pt-3">
                  <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Login</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>
        
        {/* Main Content */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full md:w-[512px] max-w-[512px] py-5 flex-1">
            {/* Navigation Tabs */}
            <div className="pb-3">
              <div className="flex border-b border-[#DEDEDE] px-4 gap-8">
                <a 
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6B6B6B] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#6B6B6B] text-sm font-bold leading-normal tracking-[0.015em]">Goals</p>
                </a>
                <a 
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-black text-black pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-black text-sm font-bold leading-normal tracking-[0.015em]">Preferences</p>
                </a>
              </div>
            </div>

            {/* Main Content */}
            <h2 className="text-black tracking-light text-xl sm:text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
              Select upto 10 Industries in which you want to connect
            </h2>

            <div className="px-4">
              {industries.map((industry) => (
                <label key={industry.id} className="flex gap-x-3 py-3 flex-row items-start">
                  <input
                    type="checkbox"
                    checked={selectedIndustries.some(i => i.id === industry.id)}
                    onChange={() => handleIndustryChange(industry)}
                    className="h-5 w-5 mt-0.5 rounded border-[#DEDEDE] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:ring-offset-0 focus:border-[#DEDEDE] focus:outline-none"
                  />
                  <p className="text-black text-sm sm:text-base font-normal leading-normal">{industry.name}</p>
                </label>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
                <button 
                  onClick={handlePrevious}
                  className="flex min-w-[84px] flex-1 sm:flex-initial cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#EEEEEE] text-black text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Prev</span>
                </button>
                <button 
                  onClick={handleContinue}
                  className="flex min-w-[84px] flex-1 sm:flex-initial cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-black text-white text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Continue</span>
                </button>
              </div>
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

export default PreferencesTabPage;