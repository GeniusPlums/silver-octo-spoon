'use client'
import React, { useState, useEffect } from 'react';

const MingleEatTalk: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#171611] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Epilogue, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#383529] px-4 sm:px-8 lg:px-16 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Mingle Eat Talk</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden lg:flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal" href="#">How it works</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Features</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Events</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Community</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Blog</a>
        </nav>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#dfbf20] text-[#171611] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Join now</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#383529] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <MembershipTiersSection />
      </div>
    </div>
  );
};


const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        title: "Your personal network manager",
        description: "Mingle Eat Talk is a personal networking platform for business professionals. We help you build and maintain your professional relationships, so you can focus on what you do best.",
        image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png"
      },
      {
        title: "Connect with like-minded professionals",
        description: "Expand your network and discover new opportunities through our curated events and networking features.",
        image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png" // Replace with actual image URL
      },
      {
        title: "Manage your relationships effortlessly",
        description: "Our intuitive CRM tools help you keep track of your contacts, interactions, and follow-ups with ease.",
        image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png" // Replace with actual image URL
      },
      {
        title: "Grow your career, one connection at a time",
        description: "Leverage the power of your network to accelerate your professional growth and achieve your goals.",
        image: "https://cdn.usegalileo.ai/sdxl10/7476938d-03dc-441b-b51b-3b9aa7286a4e.png" // Replace with actual image URL
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="relative mb-12">
        <div className="relative h-[480px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${slide.image}")`}}
            >
              <div className="flex flex-col gap-2 text-left max-w-2xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                  {slide.title}
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal sm:text-base">
                  {slide.description}
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#dfbf20] text-[#171611] text-sm font-bold leading-normal tracking-[0.015em] sm:text-base">
                <span className="truncate">Get started</span>
              </button>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#10095;
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-[#dfbf20]' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  };

const AboutSection: React.FC = () => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About us</h2>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 max-w-3xl">
        Mingle Eat Talk is a personal networking platform for business professionals. We help you build and maintain your professional relationships, so you can focus on what you do best. Our mission is to help professionals build better relationships, and we believe that the key to building better relationships is to be more intentional about how we spend our time with people.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {[
          {
            title: "Productivity",
            description: "We are focused on helping you be more productive by helping you build and maintain your professional relationships.",
            image: "https://cdn.usegalileo.ai/sdxl10/7dea6e54-6ae1-4efb-a886-83d29c6e4250.png"
          },
          {
            title: "Relationships",
            description: "We are building a platform that helps you build better relationships by making it easier to stay in touch, remember important details, and make introductions.",
            image: "https://cdn.usegalileo.ai/stability/f82d0bcc-e3a3-4b06-b3e5-cf14a1a5b271.png"
          },
          {
            title: "Diversity",
            description: "We are committed to building an inclusive community that values diversity of thought, background, and experience.",
            image: "https://cdn.usegalileo.ai/stability/0ef28f0b-c4a3-4003-9179-5f10d24d4c15.png"
          },
          {
            title: "Community",
            description: "We are building a community of professionals who are committed to helping each other succeed.",
            image: "https://cdn.usegalileo.ai/stability/c37eee22-1643-4796-8806-88b16532e74b.png"
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{backgroundImage: `url("${item.image}")`}}
            ></div>
            <div>
              <p className="text-white text-base font-medium leading-normal">{item.title}</p>
              <p className="text-[#b7b39e] text-sm font-normal leading-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: "UsersThree", title: "Personal CRM", description: "Keep track of your professional relationships" },
    { icon: "ChatDots", title: "Chat", description: "Stay in touch with your connections" },
    { icon: "Calendar", title: "Events", description: "Discover and RSVP to virtual and in-person events" },
    { icon: "AppWindow", title: "Integrations", description: "Connect Mingle Eat Talk with your favorite tools" },
    { icon: "EnvelopeOpen", title: "Email Sync", description: "Sync your email conversations" },
    { icon: "Check", title: "Task Management", description: "Manage your to-dos and reminders" },
    { icon: "Database", title: "Data Enrichment", description: "Enrich your contacts with public data" },
    { icon: "MagnifyingGlass", title: "Advanced Search", description: "Find people based on location, industry, and more" }
  ];

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#524f3d] bg-[#26241c] p-4 flex-col">
            <div className="text-white">
              {/* Icon component would go here */}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">{feature.title}</h2>
              <p className="text-[#b7b39e] text-sm font-normal leading-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[
          "https://cdn.usegalileo.ai/sdxl10/fbf96a75-2067-4529-a308-261628a5d054.png",
          "https://cdn.usegalileo.ai/sdxl10/18a09a55-e7bc-406e-a8ad-f1da01bb04f7.png",
          "https://cdn.usegalileo.ai/sdxl10/f9428087-2fbc-4233-bb61-20301f5ec522.png"
        ].map((url, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{backgroundImage: `url("${url}")`}}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      image: "https://cdn.usegalileo.ai/stability/181514a9-a01f-4f7d-a6ab-01c0c6e11d4b.png",
      text: "Mingle Eat Talk has been a game changer for me. I've been able to keep track of all my professional relationships in one place, and it's made it so much easier to stay in touch with people."
    },
    {
      name: "John Doe",
      image: "https://cdn.usegalileo.ai/stability/a8cb6362-7e22-4a75-8f01-0d773815679a.png",
      text: "I love the events feature on Mingle Eat Talk. It's a great way to discover new events and RSVP to them. I've met so many interesting people at the events I've attended."
    },
    {
      name: "Emily Johnson",
      image: "https://cdn.usegalileo.ai/stability/eda8ea6b-742c-4e0d-bf1f-7920f86bfd2e.png",
      text: "The personal CRM feature on Mingle Eat Talk is amazing. It's helped me organize my contacts and remember important details about people."
    },
    {
      name: "Michael Brown",
      image: "https://cdn.usegalileo.ai/stability/750ba588-7ea1-4f44-a771-921be893e0a2.png",
      text: "Mingle Eat Talk has helped me streamline my networking efforts. I can easily find people based on industry, location, and more. It's made it so much easier to connect with the right people."
    }
  ];

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#524f3d] bg-[#26241c] p-4 flex-col">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
              style={{backgroundImage: `url("${testimonial.image}")`}}
            ></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">{testimonial.name}</h2>
              <p className="text-[#b7b39e] text-sm font-normal leading-normal">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const MembershipTiersSection: React.FC = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Personal CRM",
        "Notes & Reminders",
        "10 Introductions/Month",
        "1,000 Contacts",
        "25 Events/Month",
        "5 Search Filters"
      ]
    },
    {
      name: "Basic",
      price: "$9/month",
      features: [
        "Everything in Free",
        "Unlimited Introductions",
        "2,000 Contacts",
        "50 Events/Month",
        "10 Search Filters"
      ]
    },
    {
      name: "Premium",
      price: "$19/month",
      features: [
        "Everything in Basic",
        "Priority Support",
        "First Access to New Features",
        "4,000 Contacts",
        "100 Events/Month",
        "20 Search Filters"
      ]
    }
  ];

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Membership Tiers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-3">
        {tiers.map((tier, index) => (
          <div key={index} className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#524f3d] bg-[#26241c] p-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-base font-bold leading-tight">{tier.name}</h1>
                {tier.name === "Free" && (
                  <p className="text-[#171611] text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#dfbf20] px-3 py-[3px] text-center">Free</p>
                )}
              </div>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{tier.price}</span>
                <span className="text-white text-base font-bold leading-tight">Billed Monthly</span>
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#383529] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Start {tier.name}</span>
            </button>
            <div className="flex flex-col gap-2">
              {tier.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div className="text-white">
                    {/* Check icon would go here */}
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center px-4 sm:px-8 lg:px-16">
      <div className="flex max-w-[1200px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-[#b7b39e] text-base font-normal leading-normal min-w-40" href="#">Help Center</a>
            <a className="text-[#b7b39e] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
            <a className="text-[#b7b39e] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
            <a className="text-[#b7b39e] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Social media icons would go here */}
          </div>
          <p className="text-[#b7b39e] text-base font-normal leading-normal">2023 Mingle Eat Talk</p>
        </footer>
      </div>
    </footer>
  );
};

export default MingleEatTalk;