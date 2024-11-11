import React, { useState } from 'react';

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
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);

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

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-['Plus_Jakarta_Sans']">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#EEEEEE] px-10 py-3" />
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
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
            <h2 className="text-black tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
              Select upto 10 Industries in which you want to connect
            </h2>

            <div className="px-4">
              {industries.map((industry) => (
                <label key={industry.id} className="flex gap-x-3 py-3 flex-row">
                  <input
                    type="checkbox"
                    checked={selectedIndustries.some(i => i.id === industry.id)}
                    onChange={() => handleIndustryChange(industry)}
                    className="h-5 w-5 rounded border-[#DEDEDE] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:ring-offset-0 focus:border-[#DEDEDE] focus:outline-none"
                  />
                  <p className="text-black text-base font-normal leading-normal">{industry.name}</p>
                </label>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#EEEEEE] text-black text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Prev</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-black text-white text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Continue</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col" />
        </footer>
      </div>
    </div>
  );
};

export default PreferencesTabPage;