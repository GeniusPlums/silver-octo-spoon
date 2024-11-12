'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MingleEatTalk: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

const Header: React.FC<{ isMenuOpen: boolean; setIsMenuOpen: (isOpen: boolean) => void }> = ({ isMenuOpen, setIsMenuOpen }) => {
  const router = useRouter();
  
  return (
    <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 sm:px-8 lg:px-16 py-3 bg-white">
      <div className="flex items-center gap-4 text-gray-900">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
              fill="currentColor"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Mingle Eat Talk</h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-gray-700 text-sm font-medium leading-normal hover:text-gray-900" href="#">How it works</a>
          <a className="text-gray-700 text-sm font-medium leading-normal hover:text-gray-900" href="#">Community</a>
          <a className="text-gray-700 text-sm font-medium leading-normal hover:text-gray-900" href="#">Blog</a>
        </nav>
        <div className="flex gap-2">
          <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200">
            <span className="truncate">Sign In</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center gap-4">
        <button
          className="p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col w-full py-4">
            <a className="text-gray-700 text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50 hover:text-gray-900" href="#">About Mingle Eat Talk</a>
            <a className="text-gray-700 text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50 hover:text-gray-900" href="#">Events</a>
            <a className="text-gray-700 text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50 hover:text-gray-900" href="#">Community</a>
            <a className="text-gray-700 text-sm font-medium leading-normal py-3 px-4 hover:bg-gray-50 hover:text-gray-900" href="#">Blog</a>
            <div className="flex flex-col gap-2 px-4 pt-3">
              <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200">
                <span className="truncate">Sign In</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 px-4 sm:px-8 lg:px-16 bg-white">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <UpcomingEventsSection />
      <TestimonialsSection />
    </main>
  );
};

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/profile-page-1');
  };

  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Connect, Share, and Grow Together
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Join a community of professionals who believe in the power of meaningful connections and shared experiences.
      </p>
      <button 
        onClick={handleGetStarted}
        className="bg-black text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-800 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="my-12 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">About M.E.T</h2>
      <p className="text-lg mb-8 text-gray-700">
        Mingle Eat Talk is more than just a networking platform. We&apos;re a community dedicated to fostering genuine connections and professional growth. Our unique approach combines curated networking events, powerful relationship management tools, and a focus on meaningful interactions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Curated Connections</h3>
          <p className="text-gray-700">We match you with professionals who align with your goals and interests.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Beyond Networking</h3>
          <p className="text-gray-700">Build lasting relationships through shared experiences and collaborative opportunities.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Career Acceleration</h3>
          <p className="text-gray-700">Leverage your network to unlock new opportunities and accelerate your professional growth.</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <div className="my-12 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center bg-gray-50 p-6 rounded-xl">
          <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
          <p className="text-gray-700">Sign up and build your professional profile to showcase your skills and interests.</p>
        </div>
        <div className="text-center bg-gray-50 p-6 rounded-xl">
          <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Connect & Engage</h3>
          <p className="text-gray-700">Attend events, join discussions, and connect with like-minded professionals.</p>
        </div>
        <div className="text-center bg-gray-50 p-6 rounded-xl">
          <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Grow Your Network</h3>
          <p className="text-gray-700">Nurture relationships and leverage your connections for mutual growth and success.</p>
        </div>
      </div>
    </div>
  );
};

const UpcomingEventsSection: React.FC = () => {
  const events = [
    { title: "Tech Networking Mixer", date: "May 15, 2024", location: "Virtual" },
    { title: "Women in Leadership Forum", date: "June 2, 2024", location: "New York, NY" },
    { title: "Startup Pitch Night", date: "June 10, 2024", location: "San Francisco, CA" },
  ];

  return (
    <div className="my-12 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-600 mb-4">{event.location}</p>
            <button className="bg-black text-white px-4 py-2 rounded-xl font-bold hover:bg-gray-800 transition duration-300">
              Register
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-black hover:text-gray-800 font-medium hover:underline">View all events</a>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Corp",
      text: "M.E.T has transformed how I approach networking. The connections I&apos;ve made here are genuine and valuable.",
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      company: "Innovation Labs",
      text: "The quality of connections and events on this platform is unmatched. It&apos;s been instrumental in growing my business.",
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director",
      company: "Creative Solutions",
      text: "I&apos;ve found an incredible community of like-minded professionals here. The events are always insightful and well-organized.",
    },
  ];

  return (
    <div className="my-12 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">What Our Members Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">How It Works</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Why Mingle Eat Talk</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-black">Events</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-black">Help Center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">FAQs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Contact Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-black">LinkedIn</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Instagram</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 Mingle Eat Talk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MingleEatTalk;