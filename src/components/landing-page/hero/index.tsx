'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png",
      title: "Your personal network manager",
      description: "Mingle Eat Talk is a personal networking platform for business professionals. We help you build and maintain your professional relationships, so you can focus on what you do best."
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png",
      title: "Connect with ease",
      description: "Our platform makes it simple to stay in touch with your professional contacts, organize events, and grow your network effectively."
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png",
      title: "Boost your career",
      description: "Leverage the power of your professional network to unlock new opportunities and advance your career with Mingle Eat Talk."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 sm:px-10 sm:min-h-[600px]"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${slide.image}")`}}
          >
            <div className="flex flex-col gap-2 text-left max-w-2xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:leading-tight">
                {slide.title}
              </h1>
              <p className="text-white text-sm font-normal leading-normal sm:text-base">
                {slide.description}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-xl px-4 sm:h-12 sm:px-5 bg-[#dfbf20] text-[#171611] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-[#c5a91c] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-[#dfbf20]' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;